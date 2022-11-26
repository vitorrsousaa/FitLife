import styled from 'styled-components/native';

import { Platform, StatusBar } from 'react-native';

const isAndroid = Platform.OS === 'android';

export const Container = styled.SafeAreaView`
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'};
  background: #252525;
  flex: 1;
`;

export const Content = styled.View`
  padding: 24px;
  margin-bottom: 16px;
`;

export const WorkoutImage = styled.ImageBackground`
  min-width: 100%;
  padding: 56px 24px;
  height: 310px;
`;

export const ContainerExercises = styled.View`
  padding: 0 24px;

  flex: 1;
`;

export const Divider = styled.View`
  margin-bottom: 16px;
`;
