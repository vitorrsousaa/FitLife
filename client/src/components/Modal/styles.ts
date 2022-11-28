import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;

  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  background: var(--gray);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  max-height: 88vh;

  padding: 2rem;
  gap: 1rem;
  width: 35rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-weight: 600;
      font-size: 2rem;
    }

    svg {
      cursor: pointer;
    }
  }

  .details {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      font-weight: 500;
      font-size: 1.5rem;
      color: var(--secondary);
    }

    p {
      font-weight: 500;
      font-size: 1rem;
    }
  }

  &::-webkit-scrollbar {
    width: 0.5rem;
    border-radius: 2rem;
  }

  &::-webkit-scrollbar-track {
    background: var(--gray);
    border-radius: 2rem;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--primary);

    border-radius: 2rem;
  }
`;
