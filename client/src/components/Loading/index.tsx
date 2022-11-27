import React from 'react';

import { Container } from './styles';

interface LoadingProps {
  isLoading: boolean;
}

const Loading = ({ isLoading }: LoadingProps) => {
  if (!isLoading) {
    return null;
  }

  return (
    <Container>
      <div className="loader"></div>
    </Container>
  );
};

export default Loading;
