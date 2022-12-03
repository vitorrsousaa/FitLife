import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Divider from '../../components/Divider';
import { Header } from '../../components/Header';
import Loading from '../../components/Loading';
import { api } from '../../services/api';
import { Workout } from '../../types/Workout';
import { formatDate } from '../../utils/formatDate';
import {
  Category,
  Container,
  ContainerButton,
  ContainerCategory,
  ContainerHeader,
  ContainerPlanWorkout,
  ContainerWorkout,
  Content,
  ContentWorkout,
  HeaderWorkout,
  SetsWorkouts,
} from './styles';

const ShowWorkout = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [data, setData] = useState<Workout[]>([]);
  const [selectedWorkout, setSelectedWorkout] = useState('');
  const [isWorkoutLoading, setIsWorkoutLoading] = useState(true);
  const [isDataLoading, setIsDataLoading] = useState(true);

  async function handleSelectedWorkout(workoutId: string) {
    setIsDataLoading(true);
    const workout = selectedWorkout === workoutId ? '' : workoutId;

    setSelectedWorkout(workout);

    const route = workout ? `/workout/${workout}` : `/workout/athlete/${id}`;

    const { data } = await api.get(route);

    setData(data);
    setIsDataLoading(false);
  }

  async function handleDeleteWorkout() {
    setIsDataLoading(true);
    setIsWorkoutLoading(true);

    await api.delete(`/workout/${selectedWorkout}`);

    setIsDataLoading(false);
    setIsWorkoutLoading(false);

    navigate('/');
  }

  useEffect(() => {
    api.get(`/workout/athlete/${id}`).then((workoutsResponse) => {
      setWorkouts(workoutsResponse.data);
      setData(workoutsResponse.data);
      setIsWorkoutLoading(false);
      setIsDataLoading(false);
    });
  }, []);

  return (
    <>
      <Header />

      <Container>
        <Content>
          <ContainerHeader>
            {isWorkoutLoading ? (
              <Loading color="var(--gray-100)" />
            ) : workouts.length > 0 ? (
              <>
                <ContainerCategory>
                  {workouts.map(({ _id, title }) => {
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
                  })}
                </ContainerCategory>

                <Link to="/">Voltar</Link>
              </>
            ) : (
              <>
                <h2>Este atleta não possui treino</h2>
                <Link to="/">Voltar</Link>
              </>
            )}
          </ContainerHeader>

          <ContainerPlanWorkout>
            {isDataLoading ? (
              <Loading size="5rem" />
            ) : (
              data.map((workout) => (
                <div key={workout._id}>
                  <HeaderWorkout>
                    <h2>{workout.title}</h2>
                    <p>{formatDate(workout.createdAt)}</p>
                  </HeaderWorkout>

                  {workout.exercises.map(
                    ({
                      exercise,
                      description,
                      sets,
                      minRange,
                      maxRange,
                      _id,
                    }) => (
                      <ContainerWorkout key={`${_id}_${exercise._id}`}>
                        <div>
                          <h3>{exercise.name}</h3>
                          {description ? <p>{description}</p> : null}
                        </div>
                        <ContentWorkout>
                          <h4>Works sets</h4>
                          <section>
                            <div>
                              <p>Sets</p>
                              <p>Reps</p>
                            </div>
                            <SetsWorkouts>
                              <p>{sets} W</p>
                              <p>{`${minRange} - ${maxRange}`}</p>
                            </SetsWorkouts>
                          </section>
                        </ContentWorkout>

                        <Divider />
                      </ContainerWorkout>
                    )
                  )}
                </div>
              ))
            )}
          </ContainerPlanWorkout>

          {workouts.length > 0 ? (
            <ContainerButton>
              <Button
                style={{ background: 'var(--error)', marginTop: '2rem' }}
                disabled={selectedWorkout === ''}
                onClick={handleDeleteWorkout}
              >
                Excluir plano de treino
              </Button>
            </ContainerButton>
          ) : null}
        </Content>
      </Container>
    </>
  );
};

export default ShowWorkout;
