import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import StackRoutes from './stack.routes';

const Routes = () => {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
};

export default Routes;
