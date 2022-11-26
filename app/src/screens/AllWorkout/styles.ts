import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';

const isAndroid = Platform.OS === 'android';

export const Container = styled.SafeAreaView`
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'};
  background: #252525;
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-top: 56px;
  margin-bottom: 32px;
  padding: 0 24px;
`;

export const CloseButton = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  border-radius: 100%;

  align-items: center;
  justify-content: center;

  background: #3a3a3c;
`;

export const ContainerCard = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin: 0 24px 16px 24px;
  padding: 16px;
  background: #2c2c2e;
  border-radius: 16px;
`;

export const Content = styled.View``;
