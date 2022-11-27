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
    justify-content: space-between;
    gap: 2rem;
  }

  .gender-details {
    display: flex;
    gap: 8px;

    input {
      appearance: none;
    }
  }
`;
interface LabelGenderProps {
  isActive: boolean;
}

export const LabelGender = styled.label<LabelGenderProps>`
  background: ${(props) => (props.isActive ? 'var(--primary)' : '#999')};

  border-radius: 4px;
  border: none;

  &:hover {
    border: solid 1px black;
  }

  flex: 1;
  height: 3.375rem;
  font-weight: 500;
  font-size: 1.5rem;
  text-align: center;
  color: var(--gray-100);

  display: flex;
  align-items: center;
  justify-content: center;
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
