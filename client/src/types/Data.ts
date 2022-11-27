import { Workout } from './Workout';
import { Exercise } from './Exercise';

export interface Data {
  athlete: string;
  createdAt: string;
  workout: Workout;
  exercises: {
    exercise: Exercise;
    info: {
      createdAt: string;
      _id: string;
      charge: number;
      reps: number;
    }[];
  }[];
  _id: string;
  __v: number;
}
