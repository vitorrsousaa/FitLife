import styled from 'styled-components';

export const ContainerCreateWorkoutModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
`;

export const ContainerInput = styled.label`
  width: 100%;
  display: flex;

  align-items: center;
  padding: 0.5rem 1rem;
  gap: 1rem;

  height: 2.5rem;

  border: 1px solid var(--gray-100);
  border-radius: 4px;

  input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background: transparent;

    color: var(--gray-100);
    font-weight: 500;
    font-size: 1rem;

    &::placeholder {
      color: var(--gray-100);
      font-weight: 500;
      font-size: 1rem;
    }
  }
`;

export const ContainerMuscle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 1rem;
  margin-bottom: 2rem;
`;

interface ContentMuscleProps {
  disabled: boolean;
}

export const ContentMuscle = styled.div<ContentMuscleProps>`
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
`;

export const ContainerExercise = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.5rem;

  border: 1px solid var(--gray-100);
  border-radius: 4px;
  min-height: 7.5rem;
  max-height: 12rem;

  h2 {
    font-weight: 600;
    font-size: 1.5rem;
  }

  overflow-y: auto;

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

export const ContentExercise = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;

  border-bottom: solid 2px var(--primary);
  width: 100%;

  p {
    font-weight: 600;
    font-size: 1.25rem;
  }

  button {
    border-radius: 0.725rem;
    border: solid 2px var(--primary);
    background: transparent;
    color: var(--primary);
    width: 1.5rem;
    height: 1.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.5rem;
  }
`;

export const ContainerAddExerciseModal = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;

export const ContainerSelectedExercises = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ContentSelectedExercises = styled.div`
  div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  h1 {
    color: var(--primary);
    font-weight: 600;
    font-size: 1rem;
  }

  h2 {
    font-size: 0.75rem;
    line-height: 22px;
  }

  h3 {
    font-size: 0.75rem;
  }

  padding-bottom: 8px;

  border-bottom: solid 1px var(--primary);
`;
