import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .info-details {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
`;

export const Content = styled.label`
  flex: 1;
  align-items: center;

  h1:first-child {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  h1 + div {
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    gap: 1rem;
    height: 2.625rem;

    border: 1px solid var(--gray-100);
    border-radius: 4px;
  }

  .gender-details {
    height: 3.375rem;

    background: var(--primary);
    border-radius: 4px;
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;

    p {
      font-weight: 500;
      font-size: 1.5rem;

      text-align: center;
    }
  }
`;
