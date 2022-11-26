import styled from 'styled-components';

interface ContainerProps {
  disabled?: boolean;
}

export const Container = styled.button<ContainerProps>`
  padding: 0.875rem 0;

  flex: 1;
  height: 3.375rem;
  width: 100%;

  background: ${({ disabled }) => (disabled ? '#999' : 'var(--primary)')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  cursor: ${({ disabled }) => disabled && 'not-allowed'};
  color: var(--white);
  border-radius: 48px;
  border: none;

  font-weight: 600;
  font-size: 1rem;

  transition: all 0.5s;

  &:hover {
    transform: scale(1.05);
  }
`;
