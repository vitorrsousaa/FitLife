import styled from 'styled-components';

export const ContainerAthlete = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.5rem 2rem;

  background: var(--gray);
  border: 1px solid var(--gray-100);
  border-radius: 8px;

  .athlete-details {
    display: flex;
    flex-direction: column;
    gap: 4px;

    h1 {
      font-weight: 700;
      font-size: 1.5rem;
    }

    h2 {
      font-size: 1rem;
    }
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  button {
    background: transparent;
    border: none;
    color: var(--primary);
    transition: all 0.5s;

    svg {
      font-size: 3rem;
      fill: var(--primary);
    }

    &:hover {
      transform: scale(1.2);
    }
  }
`;
