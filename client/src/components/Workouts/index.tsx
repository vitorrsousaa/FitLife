import { useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';

import WorkoutBoard from './WorkoutBoard';
import { AddAthleteModal } from '../AddAthleteModal';

import { Container, Content, Header, ContainerInput } from './styles';
import { Athlete } from '../../types/Athlete';
import { api } from '../../services/api';
import Loading from '../Loading';

export function Workouts() {
  const [isOpenAddAthleteModal, setIsOpenAddAthleteModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [athletes, setAthletes] = useState<Athlete[]>([]);
  const [selectedAthlete, setSelectedAthlete] = useState('');

  useEffect(() => {
    api.get('/athlete').then((response) => {
      setAthletes(response.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <Container>
        <Content>
          <Header>
            <h1>Meus atletas</h1>
            <button onClick={() => setIsOpenAddAthleteModal(true)}>+</button>
          </Header>

          <ContainerInput>
            <BsSearch fill="var(--gray-100)" />
            <input
              type="text"
              placeholder="Busque pelo nome do seu atleta"
              value={selectedAthlete}
              onChange={(event) => setSelectedAthlete(event.target.value)}
            />
          </ContainerInput>

          {isLoading ? (
            <Loading size="5rem" color="var(--gray)" />
          ) : (
            athletes.map((athlete) => (
              <WorkoutBoard key={athlete._id} athlete={athlete} />
            ))
          )}
        </Content>
      </Container>

      <AddAthleteModal
        isOpen={isOpenAddAthleteModal}
        onClose={() => setIsOpenAddAthleteModal(false)}
      />
    </>
  );
}
