import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { api } from '../../services/api';
import { Exercise } from '../../types/Exercise';
import { Muscle } from '../../types/Muscle';

import Button from '../Button';
import Divider from '../Divider';
import MapGym from '../icons/MapGym';
import { Input } from '../Input';
import Loading from '../Loading';
import { Modal } from '../Modal';

import {
  ContainerAddExerciseModal,
  ContainerInput,
  ExerciseContent,
  ExerciseContainer,
  MuscleContent,
  MuscleContainer,
} from './styles';

interface CreateWorkoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormAddExercise {
  sets: number;
  minRange: number;
  maxRange: number;
}

const formAddExerciseSchema = yup.object().shape({
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
});

const CreateWorkoutModal = ({ isOpen, onClose }: CreateWorkoutModalProps) => {
  // const muscles = ['Dorsal', 'Biceps', 'Triceps', 'Perna', 'Ombro', 'Peito'];
  const [isLoadingMuscles, setLoadingMuscles] = useState(false);
  const [isLoadingExercises, setLoadingExercises] = useState(false);
  const [selectedMuscle, setSelectedMuscle] = useState('');
  const [titleTraining, setIsTitleTraining] = useState('');
  const [muscles, setMuscles] = useState<Muscle[]>([]);
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [isAddExerciseModal, setIsAddExerciseModal] = useState(false);
  const { register, handleSubmit, formState, reset } = useForm<FormAddExercise>(
    {
      resolver: yupResolver(formAddExerciseSchema),
    }
  );

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

  function handleCancelCreatedTraining() {
    setIsTitleTraining('');
    setSelectedMuscle('');
    reset();
    onClose();
  }

  function handleCancelAddExercise() {
    setIsAddExerciseModal(false);
    reset();
  }

  const handleExerciseModal: SubmitHandler<FormAddExercise> = (
    data: FormAddExercise,
    event
  ) => {
    event?.preventDefault;
    console.log(data);
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={handleCancelCreatedTraining}
        title="Joaquim dos Santos"
        containerId="createWorkout-modal"
      >
        <>
          <ContainerInput>
            <MapGym />
            <input
              placeholder="Digite o título do treino"
              onChange={(event) => handleChangeTitle(event.target.value)}
              value={titleTraining}
            />
          </ContainerInput>

          <MuscleContainer>
            {isLoadingMuscles ? (
              <Loading />
            ) : (
              muscles.map((muscle) => {
                const isSelected = selectedMuscle === muscle._id;

                return (
                  <MuscleContent
                    key={muscle._id}
                    onClick={() => handleSelectedMuscle(muscle._id)}
                    disabled={isSelected}
                  >
                    <p>💪</p>
                    <p>{muscle.name}</p>
                  </MuscleContent>
                );
              })
            )}
          </MuscleContainer>

          <ExerciseContainer>
            {selectedMuscle.length > 0 ? (
              isLoadingExercises ? (
                <Loading />
              ) : (
                <>
                  {exercises.map((exercise) => (
                    <ExerciseContent key={exercise._id}>
                      <p>{exercise.name}</p>
                      <button onClick={() => setIsAddExerciseModal(true)}>
                        +
                      </button>
                    </ExerciseContent>
                  ))}
                </>
              )
            ) : (
              <>
                <h2>Selecione um músculo!</h2>
              </>
            )}
          </ExerciseContainer>

          {/* {titleTraining.length > 0 && (
          <Button
            disabled={!(selectedMuscle.length > 0)}
            style={{ background: 'var(--primary)' }}
          >
            Adicionar exercícios
          </Button>
        )} */}
          <Divider />
          <Button disabled>Salvar treino</Button>
        </>
      </Modal>

      <Modal
        isOpen={isAddExerciseModal}
        onClose={handleCancelAddExercise}
        title="Adicionar exercício"
        containerId="createWorkout-modal"
      >
        <>
          <ContainerAddExerciseModal
            onSubmit={handleSubmit(handleExerciseModal)}
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
            <Button>Salvar</Button>
          </ContainerAddExerciseModal>
        </>
      </Modal>
    </>
  );
};

export default CreateWorkoutModal;
