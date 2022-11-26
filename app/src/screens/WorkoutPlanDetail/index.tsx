import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { FlatList } from 'react-native';

import { CloseButton } from '../../components/CloseButton';
import { Text } from '../../components/Text';
import {
  Container,
  Content,
  WorkoutImage,
  ContainerExercises,
  Divider,
} from './styles';

import { workouts } from '../../mocks/workouts';
import ExerciseCard from '../../components/ExerciseCard';

export function WorkoutPlanDetail() {
  const { goBack } = useNavigation();

  // console.log(route.params);

  return (
    <Container>
      <WorkoutImage
        source={{
          uri: workouts[0].imagePath,
        }}
      >
        <CloseButton
          side="left"
          onPress={goBack}
          background="rgba(58, 58, 60, 0.5);"
        />
      </WorkoutImage>
      <Content>
        <View>
          <Text weight="600" size={28} style={{ marginBottom: 4 }}>
            {workouts[0].title}
          </Text>
          <Text color="#FFA800" size={20} style={{ marginBottom: 16 }}>
            {workouts[0].muscle}
          </Text>
          <Text size={18}>{workouts[0].description}</Text>
        </View>
      </Content>

      <ContainerExercises>
        <FlatList
          data={workouts[0].exercises}
          keyExtractor={({ exercise }) => exercise._id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: exercise }) => (
            <ExerciseCard
              imagePath="https://picsum.photos/900/900?grayscale"
              title={exercise.exercise.title}
              sets={exercise.sets}
            />
          )}
          ItemSeparatorComponent={Divider}
        />
      </ContainerExercises>
    </Container>
  );
}
