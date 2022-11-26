import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 12.75rem;

  background: var(--primary);
  padding: 2rem;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 76rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .page-details {
    h1 {
      font-weight: 600;
      font-size: 2rem;
      color: var(--white);
    }

    p {
      font-weight: 400;
      font-size: 1rem;

      margin-top: 6px;
      color: var(--white);
    }
  }

  h2 {
    font-weight: 700;
    font-size: 2.5rem;
    color: var(--white);

    span {
      font-weight: 300;
      color: var(--white);
    }
  }
`;
