import styled from 'styled-components';

export const Container = styled.div`
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
