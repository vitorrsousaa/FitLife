import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  & > :first-child {
    font-weight: 500;
    font-size: 1.5rem;
  }

  & > :last-child {
    font-weight: 500;

    color: var(--primary);
  }
`;

export const ContainerWorkout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 0.5rem;
  margin: 1.5rem 0;

  * {
    text-align: center;
  }

  & > :first-child {
    font-weight: 500;
    font-size: 1.5rem;
  }

  & > :first-child + p {
    font-weight: 400;
    font-size: 1rem;
  }
`;

export const ContentWorkout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;

  & > :first-child {
    font-weight: 600;
    font-size: 1.125rem;

    color: var(--secondary);
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 4px;
    width: 100%;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    width: 100%;
    max-width: 19.375rem;

    p {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      width: 3.75rem;
      height: 2.06rem;

      border-radius: 8px;
    }
  }

  section > *:not(div:first-child) {
    *:not(:first-child) {
      background: var(--gray-100);
      font-weight: 600;
      color: var(--black);
    }

    *:first-child {
      background-color: var(--primary);
      color: var(--white);
      font-weight: 600;
    }
  }
`;
