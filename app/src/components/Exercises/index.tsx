import React from 'react';
import { TouchableOpacity } from 'react-native';
import ExerciseCard from '../ExerciseCard';
import { Text } from '../Text';

import { Container, Content } from './styles';

const Exercises = () => {
  return (
    <Container>
      <Content>
        <Text weight="600" size={24}>
          Histórico de exercícios
        </Text>
        <TouchableOpacity>
          <Text size={16} color="#FFA800">
            Ver todos
          </Text>
        </TouchableOpacity>
      </Content>
      {/* <ExerciseCard /> */}
    </Container>
  );
};

export default Exercises;
