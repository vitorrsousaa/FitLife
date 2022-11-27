import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
  height: 100%;

  .loader {
    width: 2rem;
    height: 2rem;
    border: 6px solid var(--black);
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
