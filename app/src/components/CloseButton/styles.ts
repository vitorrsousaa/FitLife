import styled from 'styled-components/native';

interface CloseButtonContainerProps {
  background?: string;
}

export const CloseButtonContainer = styled.TouchableOpacity<CloseButtonContainerProps>`
  width: 32px;
  height: 32px;
  border-radius: 100%;
  align-items: center;
  justify-content: center;
  background: ${({ background }) => (background ? background : '#3a3a3c')};
`;
