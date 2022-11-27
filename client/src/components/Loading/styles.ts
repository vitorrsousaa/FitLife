import styled from 'styled-components';

interface ContainerProps {
  color?: string;
  size?: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
  height: 100%;

  .loader {
    width: ${({ size }) => (size ? size : '2rem')};
    height: ${({ size }) => (size ? size : '2rem')};
    border: 6px solid ${({ color }) => (color ? color : 'var(--gray)')};
    border-top-color: var(--primary);
    border-radius: 100%;

    animation: is-rotating 1s infinite;
  }

  @keyframes is-rotating {
    to {
      transform: rotate(1turn);
    }
  }
`;
