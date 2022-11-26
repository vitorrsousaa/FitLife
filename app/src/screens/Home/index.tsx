import React from 'react';

import Exercises from '../../components/Exercises';
import { Header } from '../../components/Header';
import YourWorkout from '../../components/YourWorkout';

import { Container, WorkoutContainer, ExerciseContainer } from './styles';

const Home = () => {
  return (
    <Container>
      <Header />

      <WorkoutContainer>
        <YourWorkout />
      </WorkoutContainer>

      <ExerciseContainer>
        <Exercises />
      </ExerciseContainer>
    </Container>
  );
};

export default Home;
