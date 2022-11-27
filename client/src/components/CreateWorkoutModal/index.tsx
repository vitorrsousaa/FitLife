import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import Button from '../Button';
import Divider from '../Divider';
import MapGym from '../icons/MapGym';
import { Input } from '../Input';
import Loading from '../Loading';
import { Modal } from '../Modal';

import {
  ContainerAddExerciseModal,
  ContainerInput,
  Exercise,
  ExerciseContainer,
  Muscle,
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
  const muscles = ['Dorsal', 'Biceps', 'Triceps', 'Perna', 'Ombro', 'Peito'];

  const { register, handleSubmit, formState, reset } = useForm<FormAddExercise>(
    {
      resolver: yupResolver(formAddExerciseSchema),
    }
  );

  const { errors } = formState;

  const [selectedMuscle, setSelectedMuscle] = useState('');
  const [titleTraining, setIsTitleTraining] = useState('');

  function handleSelectedMuscle(muscleId: string) {
    const muscle = selectedMuscle === muscleId ? '' : muscleId;

    setSelectedMuscle(muscle);
  }

  function handleChangeTitle(event: string) {
    setIsTitleTraining(event);
  }

  const [isAddExerciseModal, setIsAddExerciseModal] = useState(false);
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
        onClose={onClose}
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
            {muscles.map((muscle) => {
              const isSelected = selectedMuscle === muscle;

              return (
                <Muscle
                  key={muscle}
                  onClick={() => handleSelectedMuscle(muscle)}
                  disabled={isSelected}
                >
                  <p>💪</p>
                  <p>{muscle}</p>
                </Muscle>
              );
            })}
          </MuscleContainer>

          <ExerciseContainer>
            {selectedMuscle.length > 0 ? (
              <Exercise>
                <p>Remada Curvada</p>
                <button onClick={() => setIsAddExerciseModal(true)}>+</button>
              </Exercise>
            ) : (
              <>
                <h2>Nenhum exercício encontrado!</h2>
                <Loading isLoading={true} />
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
        onClose={() => setIsAddExerciseModal(false)}
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
              <MapGym />
            </Input>
            <Input
              type="number"
              placeholder="Qual o mínimo de repetições?"
              {...register('minRange')}
            >
              <MapGym />
            </Input>
            <Input
              type="number"
              placeholder="Qual o máximo de repetições?"
              {...register('maxRange')}
            >
              <MapGym />
            </Input>
            <Button>Salvar</Button>
          </ContainerAddExerciseModal>
        </>
      </Modal>
    </>
  );
};

export default CreateWorkoutModal;
