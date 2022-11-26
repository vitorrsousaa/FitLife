import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

import { Input } from '../Input';
import WorkoutBoard from './WorkoutBoard';
import { AddAthleteModal } from '../AddAthleteModal';

import { Container, Content, Header, ContainerInput } from './styles';

export function Workouts() {
  const [isOpenAddAthleteModal, setIsOpenAddAthleteModal] = useState(false);

  return (
    <>
      <Container>
        <Content>
          <Header>
            <h1>Meus atletas</h1>
            <button onClick={() => setIsOpenAddAthleteModal(true)}>+</button>
          </Header>
          <ContainerInput>
            <Input type="text" placeholder="Busque pelo nome do seu atleta">
              <BsSearch fill="var(--gray-100)" />
            </Input>
          </ContainerInput>

          <WorkoutBoard haveTraining={true} />
          <WorkoutBoard haveTraining={false} />
        </Content>
      </Container>

      <AddAthleteModal
        isOpen={isOpenAddAthleteModal}
        onClose={() => setIsOpenAddAthleteModal(false)}
      />
    </>
  );
}
