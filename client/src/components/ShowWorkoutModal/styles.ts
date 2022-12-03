import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 2rem;

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

  & > div:first-child > p {
    font-weight: 400;
    font-size: 1rem;
    margin-bottom: 0.875rem;
    text-align: center;
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

export const ContainerCategory = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 1rem;
  margin-bottom: 2rem;
`;

interface CategoryProps {
  disabled: boolean;
}

export const Category = styled.div<CategoryProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 8px;

  width: 3.5rem;

  opacity: ${({ disabled }) => (!disabled ? '0.5' : '1')};

  p:first-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.725rem;
    background: var(--white);

    box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.1);
    border-radius: 100%;
  }

  p:last-child {
    color: var(--white);
    font-weight: 600;
    font-size: 0.875rem;
  }

  p {
    text-align: center;
  }
`;
