import { Workout } from './workout';

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      AllWorkout: undefined;
      WorkoutPlanDetail: Workout;
    }
  }
}
