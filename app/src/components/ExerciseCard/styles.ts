import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;

  background: #2c2c2e;
  border-radius: 16px;
  height: 76px;
`;

export const ExerciseImage = styled.ImageBackground`
  height: 100%;
  width: 82px;

  margin-right: 8px;

  border-radius: 16px 0 16px 0;
  overflow: hidden;
`;

export const ExerciseContent = styled.View`
  padding: 16px 16px 16px 0px;
  flex-direction: row;
  flex: 1;
`;

export const ExerciseInfo = styled.View`
  margin-right: 8px;
  flex: 1;
`;
