import { Exercise } from './Exercise';

export interface Workout {
  _id: string;
  title: string;
  athlete: string;
  exercises: {
    description?: string;
    exercise: Exercise;
    sets: number;
    minRange: number;
    maxRange: number;
    _id: string;
  }[];
  createdAt: string;
  __v: number;
}
