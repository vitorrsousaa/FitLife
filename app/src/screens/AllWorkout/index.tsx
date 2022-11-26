import { FlatList } from 'react-native';
import { CloseButton } from '../../components/CloseButton';
import { RightArrow } from '../../components/icons/RightArrow';
import { Text } from '../../components/Text';
import { Container, Header, ContainerCard, Content } from './styles';
import { useNavigation } from '@react-navigation/native';
import { workouts } from '../../mocks/workouts';

export function AllWorkout() {
  const { goBack, navigate } = useNavigation();

  return (
    <>
      <Container>
        <Header>
          <CloseButton side="left" onPress={goBack} />

          <Text weight="700" size={24} style={{ flex: 1, textAlign: 'center' }}>
            Plano de treino
          </Text>
        </Header>

        <FlatList
          data={workouts}
          keyExtractor={(workout) => workout._id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: workout }) => (
            <ContainerCard onPress={() => navigate('WorkoutPlanDetail')}>
              <Content>
                <Text weight="600" size={24}>
                  {workout.title}
                </Text>
                <Text>{workout.muscle}</Text>
              </Content>
              <RightArrow />
            </ContainerCard>
          )}
        />
      </Container>
    </>
  );
}
