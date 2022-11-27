import React from 'react';

import { Container } from './styles';

interface LoadingProps {
  color?: string;
  size?: string;
}

const Loading = ({ color, size }: LoadingProps) => {
  return (
    <Container color={color} size={size}>
      <div className="loader"></div>
    </Container>
  );
};

export default Loading;
