import React, { useState } from 'react';
import Button from '../Button';
import Divider from '../Divider';
import { Modal } from '../Modal';

import { Select } from './styles';

interface CreateWorkoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateWorkoutModal = ({ isOpen, onClose }: CreateWorkoutModalProps) => {
  const [selectedMuscle, setSelectedMuscle] = useState('');

  function handleSelectedMuscle(muscle: string) {
    setSelectedMuscle(muscle);
  }
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Joaquim dos Santos"
      containerId="createWorkout-modal"
    >
      <>
        <h2>Criar Treino</h2>
        <Select
          name=""
          id=""
          onChange={({ target }) => handleSelectedMuscle(target.value)}
        >
          <option value="">Selecione o músculo alvo</option>
          <option value="Dorsal">Dorsal</option>
          <option value="Peito">Peito</option>
          <option value="Biceps">Biceps</option>
        </Select>
        <Button
          disabled={!(selectedMuscle.length > 0)}
          style={{ background: 'var(--primary)' }}
        >
          Adicionar exercícios
        </Button>
        <Divider />
        <Button disabled>Salvar treino</Button>
      </>
    </Modal>
  );
};

export default CreateWorkoutModal;
