import React from 'react';
import { View } from 'react-native';
import { Text } from '../Text';

import {
  Container,
  ExerciseContent,
  ExerciseImage,
  ExerciseInfo,
} from './styles';

interface ExerciseCardProps {
  imagePath: string;
  title: string;
  sets: number;
}

const ExerciseCard = ({ imagePath, title, sets }: ExerciseCardProps) => {
  return (
    <Container>
      <ExerciseImage
        source={{
          uri: 'https://picsum.photos/900/900?grayscale',
        }}
      />
      <ExerciseContent>
        <ExerciseInfo>
          <Text weight="600" size={18}>
            {title}
          </Text>
          <Text>{sets} Work sets</Text>
        </ExerciseInfo>
        <View>
          <Text
            weight="700"
            style={{
              backgroundColor: '#C75C07',
              borderRadius: 8,
              padding: 3,
              overflow: 'hidden',
            }}
          >
            30 kg
          </Text>
        </View>
      </ExerciseContent>
    </Container>
  );
};

export default ExerciseCard;
