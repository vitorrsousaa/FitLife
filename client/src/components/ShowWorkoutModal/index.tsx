import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';

import { Workout } from '../../types/Workout';
import { formatDate } from '../../utils/formatDate';
import Button from '../Button';
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
  const [dataWorkouts, setDataWorkouts] = useState<Workout[]>([]);
  const [selectedWorkout, setSelectedWorkout] = useState('');
  const [isWorkoutLoading, setIsWorkoutLoading] = useState(true);
  const [isDataLoading, setIsDataLoading] = useState(true);

  async function handleSelectedWorkout(workoutId: string) {
    setIsDataLoading(true);

    const workout = selectedWorkout === workoutId ? '' : workoutId;
    setSelectedWorkout(workout);

    const route = workout
      ? `/workout/${workout}`
      : `/workout/athlete/${athleteId}`;

    const { data } = await api.get(route);

    setDataWorkouts(data);

    setIsDataLoading(false);
  }

  async function handleDeleteWorkout() {
    setIsDataLoading(true);
    setIsWorkoutLoading(true);

    api.delete(`/workout/${selectedWorkout}`);

    setIsDataLoading(false);
    setIsWorkoutLoading(false);
    onClose();
  }

  useEffect(() => {
    api.get(`/workout/athlete/${athleteId}`).then((workoutsResponse) => {
      setWorkouts(workoutsResponse.data);
      setDataWorkouts(workoutsResponse.data);

      setIsWorkoutLoading(false);
      setIsDataLoading(false);
    });
  }, []);

  function handleCloseModal() {
    setSelectedWorkout('');
    onClose();
  }

  return (
    <Modal
      onClose={handleCloseModal}
      isOpen={isOpen}
      title="Planejamento de treino"
      containerId="showWorkout-modal"
    >
      <Container>
        <ContainerCategory>
          {isWorkoutLoading ? (
            <Loading />
          ) : workouts.length > 0 ? (
            workouts.map(({ _id, title }) => {
              const isSelected = selectedWorkout === _id;

              return (
                <Category
                  key={_id}
                  disabled={isSelected}
                  onClick={() => handleSelectedWorkout(_id)}
                >
                  <p>💪</p>
                  <p>{title}</p>
                </Category>
              );
            })
          ) : (
            <h2>Este atleta ainda não possui treino</h2>
          )}
        </ContainerCategory>

        {isDataLoading ? (
          <Loading size="5rem" />
        ) : (
          dataWorkouts.map((workout) => (
            <div key={workout._id}>
              <Header>
                <h2>{workout.title}</h2>
                <p>{formatDate(workout.createdAt)}</p>
              </Header>

              {workout.exercises.map(
                ({ exercise, sets, minRange, maxRange, description }) => (
                  <React.Fragment key={`${workout._id}_${exercise._id}`}>
                    <ContainerWorkout>
                      <div>
                        <h3 key={exercise._id}>{exercise.name}</h3>
                        {description ? <p>{description}</p> : null}
                      </div>
                      <ContentWorkout>
                        <h4>Works sets</h4>
                        <section>
                          <div>
                            <p>Sets</p>
                            <p>Reps</p>
                          </div>

                          <div>
                            <p>{sets} W</p>
                            <p>{`${minRange} - ${maxRange}`}</p>
                          </div>
                        </section>
                      </ContentWorkout>
                    </ContainerWorkout>
                    <Divider />
                  </React.Fragment>
                )
              )}
            </div>
          ))
        )}

        <div>
          {workouts.length > 0 ? (
            <Button
              style={{ background: 'var(--error)', marginTop: '2rem' }}
              disabled={selectedWorkout === ''}
              onClick={handleDeleteWorkout}
            >
              Excluir plano de treino
            </Button>
          ) : null}
        </div>
      </Container>
    </Modal>
  );
};

export default ShowWorkoutModal;
