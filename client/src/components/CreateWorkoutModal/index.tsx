import React, { useState } from 'react';

import Button from '../Button';
import Divider from '../Divider';
import MapGym from '../icons/MapGym';
import { Input } from '../Input';
import { Modal } from '../Modal';

import { ContainerInput, Muscle, MuscleContainer } from './styles';

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

        {titleTraining.length > 0 && (
          <Button
            disabled={!(selectedMuscle.length > 0)}
            style={{ background: 'var(--primary)' }}
          >
            Adicionar exercícios
          </Button>
        )}
        <Divider />
        <Button disabled>Salvar treino</Button>
      </>
    </Modal>
  );
};

export default CreateWorkoutModal;
