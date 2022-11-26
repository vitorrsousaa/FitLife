import { useState } from 'react';
import * as yup from 'yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { BsFillPersonFill } from 'react-icons/bs';
import Button from '../Button';
import { Height } from '../icons/Height';
import { Weight } from '../icons/Weight';
import { Input } from '../Input';
import { Modal } from '../Modal';
import { ButtonGender, Container, ContainerButtons } from './styles';

interface AddAthleteProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormAthlete {
  name: string;
  weight: number;
  height: number;
  gender: 'MASCULINO' | 'FEMININO';
}

const formAthleteSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  weight: yup.number().required('Peso obrigatório'),
  height: yup.number().required('Altura obrigatória'),
  gender: yup.string().required('Gênero Obrigatório'),
});

export function AddAthleteModal({ isOpen, onClose }: AddAthleteProps) {
  const { register, handleSubmit, formState, setValue, reset } =
    useForm<FormAthlete>({
      resolver: yupResolver(formAthleteSchema),
    });

  const { errors } = formState;

  const [gender, setGender] = useState<'MASCULINO' | 'FEMININO'>('MASCULINO');

  function handleChangeGender() {
    const futureGender = gender === 'MASCULINO' ? 'FEMININO' : 'MASCULINO';

    setGender(futureGender);

    setValue('gender', gender);
  }

  const handleAddAthlete: SubmitHandler<FormAthlete> = (
    data: FormAthlete,
    event
  ) => {
    event?.preventDefault;
    console.log(data);
  };

  function handleCancelModal() {
    setGender('MASCULINO');
    setValue('gender', gender);

    reset();
    onClose();
  }

  return (
    <Modal
      title="Adicionar novo atleta"
      onClose={onClose}
      isOpen={isOpen}
      subtitle="Informações"
      containerId="add-modal"
    >
      <Container onSubmit={handleSubmit(handleAddAthlete)}>
        <label>
          <h1>Nome completo</h1>
          <Input
            type="text"
            placeholder="Digite o nome completo do atleta"
            {...register('name')}
            error={errors.name}
          >
            <BsFillPersonFill />
          </Input>
        </label>

        <div className="info-details">
          <label>
            <h1>Peso em jejum</h1>
            <Input
              type="number"
              placeholder="Peso"
              {...register('weight')}
              error={errors.weight}
            >
              <Weight />
            </Input>
          </label>

          <label>
            <h1>Altura</h1>
            <Input
              type="number"
              placeholder="Altura"
              {...register('height')}
              error={errors.height}
            >
              <Height />
            </Input>
          </label>
        </div>

        <label>
          <h1>Gênero</h1>
          <div className="gender-details">
            <ButtonGender
              onClick={handleChangeGender}
              role="button"
              isActive={gender !== 'MASCULINO'}
            >
              Masculino
            </ButtonGender>

            <ButtonGender
              onClick={handleChangeGender}
              role="button"
              isActive={gender !== 'FEMININO'}
            >
              Feminino
            </ButtonGender>
          </div>
        </label>

        <ContainerButtons>
          <Button icon type="submit">
            Adicionar atleta
          </Button>
          <Button onPress={handleCancelModal}>Cancelar</Button>
        </ContainerButtons>
      </Container>
    </Modal>
  );
}
