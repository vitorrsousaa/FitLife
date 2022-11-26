export interface Workout {
  _id: string;
  imagePath: string;
  title: string;
  muscle: string;
  description: string;
  exercises: {
    exercise: {
      _id: string;
      title: string;
    };
    sets: number;
    minRange: number;
    maxRange: number;
  }[];
}
[];
