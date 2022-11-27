export interface Workout {
  _id: string;
  title: string;
  muscle: string;
  athlete: string;
  exercises: {
    exercise: string;
    sets: number;
    minRange: number;
    maxRange: number;
    _id: string;
  }[];
  createdAt: string;
  __v: number;
}
