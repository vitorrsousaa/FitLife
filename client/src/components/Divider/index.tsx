import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 2px;
  background-color: var(--primary);
`;

const Divider = () => {
  return <Container />;
};

export default Divider;
