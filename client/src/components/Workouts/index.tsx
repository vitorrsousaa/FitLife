import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

import { Input } from '../Input';
import WorkoutBoard from './WorkoutBoard';
import { AddAthleteModal } from '../AddAthleteModal';
import InfoModal from '../InfoModal';
import CreateWorkoutModal from '../CreateWorkoutModal';
import ShowWorkoutModal from '../ShowWorkoutModal';

import { Container, Content, Header, ContainerInput } from './styles';

export function Workouts() {
  const [isOpenAddAthleteModal, setIsOpenAddAthleteModal] = useState(false);

  const [isInfoModalVisible, setIsInfoModalVisible] = useState(false);
  const [isShowWorkoutVisible, setIsShowWorkoutVisible] = useState(false);
  const [isCreateWorkoutVisible, setIsCreateWorkoutVisible] = useState(false);

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

          <WorkoutBoard
            haveTraining={true}
            openInfoModal={() => setIsInfoModalVisible(true)}
            openShowWorkoutModal={() => setIsShowWorkoutVisible(true)}
            openCreateWorkoutModal={() => setIsCreateWorkoutVisible(true)}
          />
          <WorkoutBoard
            haveTraining={false}
            openInfoModal={() => setIsInfoModalVisible(true)}
            openShowWorkoutModal={() => setIsShowWorkoutVisible(true)}
            openCreateWorkoutModal={() => setIsCreateWorkoutVisible(true)}
          />
        </Content>
      </Container>

      <AddAthleteModal
        isOpen={isOpenAddAthleteModal}
        onClose={() => setIsOpenAddAthleteModal(false)}
      />

      <InfoModal
        isOpen={isInfoModalVisible}
        onClose={() => setIsInfoModalVisible(false)}
      />

      <ShowWorkoutModal
        isOpen={isShowWorkoutVisible}
        onClose={() => setIsShowWorkoutVisible(false)}
      />

      <CreateWorkoutModal
        isOpen={isCreateWorkoutVisible}
        onClose={() => setIsCreateWorkoutVisible(false)}
      />
    </>
  );
}
