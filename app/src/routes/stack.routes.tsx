import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import { AllWorkout } from '../screens/AllWorkout';
import { WorkoutPlanDetail } from '../screens/WorkoutPlanDetail';

const { Navigator, Screen } = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Navigator>
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen
        name="AllWorkout"
        component={AllWorkout}
        options={{ headerShown: false }}
      />
      <Screen
        name="WorkoutPlanDetail"
        component={WorkoutPlanDetail}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};

export default StackRoutes;
