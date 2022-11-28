import React from 'react';

import { Container } from './styles';

interface LoadingProps {
  color?: string;
  size?: string;
  backgroundColor?: string;
}

const Loading = ({ color, size, backgroundColor }: LoadingProps) => {
  return (
    <Container color={color} size={size} backgroundColor={backgroundColor}>
      <div className="loader"></div>
    </Container>
  );
};

export default Loading;
