import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { api } from '../../services/api';
import { Athlete } from '../../types/Athlete';
import { Exercise } from '../../types/Exercise';
import { Muscle } from '../../types/Muscle';

import Button from '../Button';
import MapGym from '../icons/MapGym';
import { Input } from '../Input';
import Loading from '../Loading';
import { Modal } from '../Modal';

import {
  ContainerAddExerciseModal,
  ContainerCreateWorkoutModal,
  ContainerInput,
  ContentExercise,
  ContainerExercise,
  ContentMuscle,
  ContainerMuscle,
  ContainerSelectedExercises,
  ContentSelectedExercises,
} from './styles';

interface CreateWorkoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  athlete: Athlete;
}

interface FormAddExercise {
  sets: number;
  exerciseId: string;
  minRange: number;
  maxRange: number;
  description: string;
  name: string;
}

interface ExerciseSelectedProps {
  description?: string;
  exercise: string;
  sets: number;
  minRange: number;
  maxRange: number;
  name: string;
}

const formAddExerciseSchema = yup.object().shape({
  exerciseId: yup
    .string()
    .typeError('Exercício é obrigatório')
    .required('É obrigatório'),
  sets: yup
    .number()
    .typeError('Work-sets é obrigatório')
    .positive('Work-sets precisa ser positivo')
    .integer('Work-sets precisa ser inteiro')
    .required('Work-sets obrigatório'),
  minRange: yup
    .number()
    .typeError('Range mínimo é obrigatório')
    .positive('Range mínimo precisa ser positivo')
    .integer('Range mínimo precisa ser inteiro')
    .required('Range mínimo obrigatório'),
  maxRange: yup
    .number()
    .typeError('Range máximo é obrigatório')
    .positive('Range máximo precisa ser positivo')
    .integer('Range máximos precisa ser inteiro')
    .required('Range máximo obrigatório'),
  description: yup.string().typeError('Precisa ser um texto'),
  name: yup.string().required(),
});

const CreateWorkoutModal = ({
  isOpen,
  onClose,
  athlete,
}: CreateWorkoutModalProps) => {
  const [isLoadingMuscles, setLoadingMuscles] = useState(false);
  const [isLoadingExercises, setLoadingExercises] = useState(false);
  const [isLoadingCreatedWorkout, setLoadingCreatedWorkout] = useState(false);
  const [selectedMuscle, setSelectedMuscle] = useState('');
  const [titleTraining, setIsTitleTraining] = useState('');
  const [muscles, setMuscles] = useState<Muscle[]>([]);
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [selectedExercises, setSelectedExercises] = useState<
    ExerciseSelectedProps[]
  >([]);
  const [isAddExerciseModal, setIsAddExerciseModal] = useState(false);

  const { register, handleSubmit, formState, reset, setValue } =
    useForm<FormAddExercise>({
      resolver: yupResolver(formAddExerciseSchema),
    });

  const { errors } = formState;

  useEffect(() => {
    setLoadingMuscles(true);
    api.get('/muscles').then((response) => setMuscles(response.data));

    setLoadingMuscles(false);
  }, []);

  async function handleSelectedMuscle(muscleId: string) {
    const muscle = selectedMuscle === muscleId ? '' : muscleId;

    setSelectedMuscle(muscle);

    if (muscle) {
      setLoadingExercises(true);

      const route = muscle && `/exercises/${muscleId}/muscle`;

      try {
        const { data } = await api.get(route);
        setExercises(data);
      } catch (error) {
        console.log(error);
      }

      setLoadingExercises(false);
    }
  }

  function handleChangeTitle(event: string) {
    setIsTitleTraining(event);
  }

  function handleCancelCreatedWorkout() {
    setIsTitleTraining('');
    setSelectedMuscle('');
    setSelectedExercises([]);
    onClose();
  }

  function handleOpenAddExercise(exercise: Exercise) {
    setIsAddExerciseModal(true);
    setValue('exerciseId', exercise._id);
    setValue('name', exercise.name);
  }

  function handleCancelAddExercise() {
    setIsAddExerciseModal(false);
    setSelectedMuscle('');
    reset();
  }

  const handleExerciseModalForm: SubmitHandler<FormAddExercise> = (
    data: FormAddExercise,
    event
  ) => {
    event?.preventDefault;

    const { description, maxRange, minRange, exerciseId, sets, name } = data;

    const exercise = {
      exercise: exerciseId,
      description,
      sets,
      maxRange,
      minRange,
      name,
    };

    setSelectedExercises((prevState) => prevState.concat(exercise));

    handleCancelAddExercise();
  };

  function handleCreatedWorkout() {
    setLoadingCreatedWorkout(true);

    const exercises = selectedExercises.map((exercise) => ({
      description: exercise.description,
      exercise: exercise.exercise,
      maxRange: exercise.maxRange,
      minRange: exercise.minRange,
      sets: exercise.sets,
    }));

    const workout = {
      title: titleTraining,
      athlete: athlete._id,
      exercises,
    };

    api.post('/workout', workout);

    setLoadingCreatedWorkout(false);
    handleCancelCreatedWorkout();
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={handleCancelCreatedWorkout}
        title={athlete.name}
        containerId="createWorkout-modal"
      >
        <ContainerCreateWorkoutModal>
          <ContainerInput>
            <MapGym />
            <input
              placeholder="Digite o título do treino"
              onChange={(event) => handleChangeTitle(event.target.value)}
              value={titleTraining}
            />
          </ContainerInput>

          <ContainerMuscle>
            {isLoadingMuscles ? (
              <Loading />
            ) : (
              muscles.map((muscle) => {
                const isSelected = selectedMuscle === muscle._id;

                return (
                  <ContentMuscle
                    key={muscle._id}
                    onClick={() => handleSelectedMuscle(muscle._id)}
                    disabled={isSelected}
                  >
                    <p>💪</p>
                    <p>{muscle.name}</p>
                  </ContentMuscle>
                );
              })
            )}
          </ContainerMuscle>

          <ContainerExercise>
            {selectedMuscle.length > 0 ? (
              isLoadingExercises ? (
                <Loading />
              ) : (
                <>
                  {exercises.map((exercise) => (
                    <ContentExercise key={exercise._id}>
                      <p>{exercise.name}</p>
                      <button onClick={() => handleOpenAddExercise(exercise)}>
                        +
                      </button>
                    </ContentExercise>
                  ))}
                </>
              )
            ) : (
              <>
                <h2>Selecione um músculo!</h2>
              </>
            )}
          </ContainerExercise>

          {selectedExercises.length > 0 && (
            <ContainerSelectedExercises>
              {selectedExercises.map((exercise) => (
                <ContentSelectedExercises
                  key={`${exercise.name}_${exercise.sets}`}
                >
                  <h1>{exercise.name}</h1>
                  <div>
                    <h2>{exercise.sets} Work-sets</h2>
                    <h3>{`${exercise.minRange} - ${exercise.maxRange} reps`}</h3>
                  </div>
                </ContentSelectedExercises>
              ))}
            </ContainerSelectedExercises>
          )}

          <Button
            disabled={!selectedExercises || !titleTraining}
            onClick={handleCreatedWorkout}
          >
            {isLoadingCreatedWorkout ? (
              <Loading backgroundColor="white" />
            ) : (
              'Salvar treino'
            )}
          </Button>
        </ContainerCreateWorkoutModal>
      </Modal>

      <Modal
        isOpen={isAddExerciseModal}
        onClose={handleCancelAddExercise}
        title="Adicionar exercício"
        containerId="createWorkout-modal"
      >
        <>
          <ContainerAddExerciseModal
            onSubmit={handleSubmit(handleExerciseModalForm)}
          >
            <Input
              type="number"
              placeholder="Quantas work-sets?"
              {...register('sets')}
              error={errors.sets}
            >
              <MapGym
                color={errors.sets ? 'var(--error)' : 'var(--gray-100)'}
              />
            </Input>
            <Input
              type="number"
              placeholder="Qual o mínimo de repetições?"
              {...register('minRange')}
              error={errors.minRange}
            >
              <MapGym
                color={errors.minRange ? 'var(--error)' : 'var(--gray-100)'}
              />
            </Input>
            <Input
              type="number"
              placeholder="Qual o máximo de repetições?"
              {...register('maxRange')}
              error={errors.maxRange}
            >
              <MapGym
                color={errors.maxRange ? 'var(--error)' : 'var(--gray-100)'}
              />
            </Input>
            <Input
              type="text"
              placeholder="Comentários sobre o exercício para o aluno"
              {...register('description')}
              error={errors.description}
            >
              <MapGym
                color={errors.description ? 'var(--error)' : 'var(--gray-100)'}
              />
            </Input>
            <Button>Salvar</Button>
          </ContainerAddExerciseModal>
        </>
      </Modal>
    </>
  );
};

export default CreateWorkoutModal;
