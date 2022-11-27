import React, { useState } from 'react';

import Button from '../Button';
import Divider from '../Divider';
import MapGym from '../icons/MapGym';
import { Input } from '../Input';
import Loading from '../Loading';
import { Modal } from '../Modal';

import {
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

const CreateWorkoutModal = ({ isOpen, onClose }: CreateWorkoutModalProps) => {
  const muscles = ['Dorsal', 'Biceps', 'Triceps', 'Perna', 'Ombro', 'Peito'];
  const [selectedMuscle, setSelectedMuscle] = useState('');
  const [titleTraining, setIsTitleTraining] = useState('');

  function handleSelectedMuscle(muscleId: string) {
    const muscle = selectedMuscle === muscleId ? '' : muscleId;

    setSelectedMuscle(muscle);
  }

  function handleChangeTitle(event: string) {
    setIsTitleTraining(event);
  }

  return (
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
              <button>+</button>
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
  );
};

export default CreateWorkoutModal;
