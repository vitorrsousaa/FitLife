import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Data } from '../../types/Data';
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

interface DataWorkoutModalProps {
  onClose: () => void;
  isOpen: boolean;
  athleteId: string;
}

const DataWorkoutModal = ({
  onClose,
  isOpen,
  athleteId,
}: DataWorkoutModalProps) => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [data, setData] = useState<Data[]>([]);
  const [selectedWorkout, setSelectedWorkout] = useState('');
  const [isWorkoutLoading, setIsWorkoutLoading] = useState(true);
  const [isDataLoading, setIsDataLoading] = useState(true);

  async function handleSelectedWorkout(workoutId: string) {
    setIsDataLoading(true);

    const workout = selectedWorkout === workoutId ? '' : workoutId;

    setSelectedWorkout(workout);

    // Primeira opção do route é quando selecionar um treino

    // const route = !workout
    //   ? `/data/athlete/${athleteId}`
    //   : `/data/workout/${workout}`;

    const route = workout ? console.log('aqui') : console.log('aqui ds');

    // const { data } = await api.get(route);
    // console.log(route);

    // setData(data);

    route;

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
    Promise.all([
      api.get(`/workout/athlete/${athleteId}`),
      api.get(`/data/athlete/${athleteId}`),
    ]).then(([workoutsResponse, dataResponse]) => {
      setWorkouts(workoutsResponse.data);
      setData(dataResponse.data);
      setIsWorkoutLoading(false);
      setIsDataLoading(false);
    });
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

        {isDataLoading ? (
          <Loading size="5rem" />
        ) : (
          data.map((workouts) => {
            return (
              <div key={workouts._id}>
                <Header>
                  <h2>{workouts.workout.title}</h2>
                  <p>{formatDate(workouts.createdAt)}</p>
                </Header>

                {workouts.exercises.map(({ exercise, info }) => (
                  <React.Fragment key={exercise._id}>
                    <ContainerWorkout>
                      <div>
                        <h3>{exercise.name}</h3>
                        {exercise.description && <p>{exercise.description}</p>}
                      </div>
                      <ContentWorkout>
                        <h4>Works sets</h4>
                        <section>
                          <div>
                            <p>Sets</p>
                            <p>Reps</p>
                            <p>Kg</p>
                          </div>
                          {info.map((infoData) => (
                            <div key={infoData._id}>
                              <p>W</p>
                              <p>{infoData.reps}</p>
                              <p>{infoData.charge}</p>
                            </div>
                          ))}
                        </section>
                      </ContentWorkout>
                    </ContainerWorkout>
                    <Divider />
                  </React.Fragment>
                ))}
              </div>
            );
          })
        )}

        <div>
          <Button
            style={{ background: 'var(--error)', marginTop: '2rem' }}
            disabled={selectedWorkout === ''}
            onClick={handleDeleteWorkout}
          >
            Excluir plano de treino
          </Button>
        </div>
      </Container>
    </Modal>
  );
};

export default DataWorkoutModal;
