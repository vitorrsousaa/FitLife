import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Workout } from '../../types/Workout';
import Divider from '../Divider';
import Loading from '../Loading';
import { Modal } from '../Modal';

import {
  Category,
  Container,
  ContainerWorkout,
  ContentWorkout,
  Header,
  ContainerCategory,
} from './styles';

interface ShowWorkoutModalProps {
  onClose: () => void;
  isOpen: boolean;
  athleteId: string;
}

const ShowWorkoutModal = ({
  onClose,
  isOpen,
  athleteId,
}: ShowWorkoutModalProps) => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [selectedWorkout, setSelectedWorkout] = useState('');
  const [isWorkoutLoading, setIsWorkoutLoading] = useState(false);

  async function handleSelectedWorkout(workoutId: string) {
    const workout = selectedWorkout === workoutId ? '' : workoutId;

    setSelectedWorkout(workout);
  }

  useEffect(() => {
    setIsWorkoutLoading(true);

    api
      .get(`/workout/athlete/${athleteId}`)
      .then((response) => setWorkouts(response.data));

    setIsWorkoutLoading(false);
  }, []);

  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      title="Planejamento de treino"
      containerId="showWorkout-modal"
    >
      <Container>
        <ContainerCategory>
          {isWorkoutLoading ? (
            <Loading />
          ) : workouts.length > 0 ? (
            workouts.map((workout) => {
              const isSelected = selectedWorkout === workout._id;

              return (
                <Category
                  key={workout._id}
                  disabled={isSelected}
                  onClick={() => handleSelectedWorkout(workout._id)}
                >
                  <p>💪</p>
                  <p>{workout.title}</p>
                </Category>
              );
            })
          ) : (
            <h2>Este atleta ainda não possui treino</h2>
          )}
        </ContainerCategory>

        <Header>
          <h2>Treino A</h2>
          <p>22/11/2022</p>
        </Header>
        <ContainerWorkout>
          <h3>Supino inclinado com halteres</h3>
          <p>Atentar para a altura correta do banco durante a execução</p>
          <ContentWorkout>
            <h4>Works Sets</h4>
            <section>
              <div>
                <p>Sets</p>
                <p>Reps</p>
                <p>Kg</p>
              </div>
              <div>
                <p>W</p>
                <p>8</p>
                <p>20</p>
              </div>
              <div>
                <p>W</p>
                <p>7</p>
                <p>20</p>
              </div>
              <div>
                <p>W</p>
                <p>7</p>
                <p>20</p>
              </div>
            </section>
          </ContentWorkout>
        </ContainerWorkout>
        <Divider />
        <ContainerWorkout>
          <h3>Supino inclinado com halteres</h3>
          <p>Atentar para a altura correta do banco durante a execução</p>
          <ContentWorkout>
            <h4>Works Sets</h4>
            <section>
              <div>
                <p>Sets</p>
                <p>Reps</p>
                <p>Kg</p>
              </div>
              <div>
                <p>W</p>
                <p>8</p>
                <p>20</p>
              </div>
              <div>
                <p>W</p>
                <p>7</p>
                <p>20</p>
              </div>
              <div>
                <p>W</p>
                <p>7</p>
                <p>20</p>
              </div>
            </section>
          </ContentWorkout>
        </ContainerWorkout>
        <Divider />
        <ContainerWorkout>
          <h3>Supino inclinado com halteres</h3>
          <p>Atentar para a altura correta do banco durante a execução</p>
          <ContentWorkout>
            <h4>Works Sets</h4>
            <section>
              <div>
                <p>Sets</p>
                <p>Reps</p>
                <p>Kg</p>
              </div>
              <div>
                <p>W</p>
                <p>8</p>
                <p>20</p>
              </div>
              <div>
                <p>W</p>
                <p>7</p>
                <p>20</p>
              </div>
              <div>
                <p>W</p>
                <p>7</p>
                <p>20</p>
              </div>
            </section>
          </ContentWorkout>
        </ContainerWorkout>
        <Divider />
        <div>
          {/* <Button
            style={{ background: 'var(--error)', marginTop: '2rem' }}
            disabled={selectedTraining === ''}
          >
            Excluir plano de treino
          </Button> */}
        </div>
      </Container>
    </Modal>
  );
};

export default ShowWorkoutModal;
