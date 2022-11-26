import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 16px;

  width: 100%;
  max-width: 76rem;

  border: 1px solid var(--gray-100);
  border-radius: 16px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(20px);
`;

export const Header = styled.header`
  display: flex;

  justify-content: space-between;
  align-items: center;

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 8px;
    gap: 0.725rem;

    background: var(--primary);
    border-radius: 8px;
    border: none;

    font-weight: 600;
    font-size: 24px;

    transition: all 0.7s;

    svg {
      font-size: 1.5rem;
      fill: var(--black);
    }

    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const ContainerInput = styled.div`
  width: 100%;
`;
