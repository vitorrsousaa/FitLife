import React from 'react';

import { Header, Container, WorkoutImage } from './styles';
import { Text } from '../Text';
import { FlatList, TouchableOpacity } from 'react-native';
import { workouts } from '../../mocks/workouts';
import { Workout } from '../../types/workout';
import { useNavigation } from '@react-navigation/native';

const YourWorkout = () => {
  const { navigate } = useNavigation();

  function handleWorkoutPlan(workout: Workout) {
    navigate('WorkoutPlanDetail', workout);
  }

  return (
    <>
      <Header>
        <Text weight="600" size={24}>
          Seu plano de treino
        </Text>
        <TouchableOpacity onPress={() => navigate('AllWorkout')}>
          <Text size={16} color="#FFA800">
            Ver todos
          </Text>
        </TouchableOpacity>
      </Header>

      <FlatList
        data={workouts}
        horizontal
        keyExtractor={(workout) => workout._id}
        showsHorizontalScrollIndicator={false}
        style={{ paddingRight: 16 }}
        renderItem={({ item: workout }) => (
          <Container onPress={() => handleWorkoutPlan(workout)}>
            <WorkoutImage
              source={{
                uri: workout.imagePath,
              }}
            >
              <Text size={18} weight="600">
                {workout.title}
              </Text>
              <Text
                size={14}
                color={'#FFA800'}
                style={{ marginBottom: 16, marginTop: 4 }}
              >
                {workout.muscle}
              </Text>
            </WorkoutImage>
          </Container>
        )}
      />
    </>
  );
};

export default YourWorkout;
