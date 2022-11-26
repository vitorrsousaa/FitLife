import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  label > h1:first-child {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  .info-details {
    display: flex;
    gap: 2rem;
  }

  .gender-details {
    display: flex;
    gap: 8px;

    button {
      flex: 1;
      height: 3.375rem;
      font-weight: 500;
      font-size: 1.5rem;
      text-align: center;
      color: var(--gray-100);
    }
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  button:last-child {
    background: transparent;
    color: var(--error);
  }
`;

interface ButtonGenderProps {
  isActive: boolean;
}

export const ButtonGender = styled.button<ButtonGenderProps>`
  background: ${(props) => (props.isActive ? 'var(--primary)' : '#999')};

  border-radius: 4px;
  border: none;

  &:hover {
    border: solid 1px black;
  }
`;
