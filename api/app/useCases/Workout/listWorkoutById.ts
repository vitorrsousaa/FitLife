import { Request, Response } from 'express';
import { Workout } from '../../models/Workout';

export async function listWorkoutById(req: Request, res: Response) {
  try {
    const { workoutId } = req.params;

    const workout = await Workout.find()
      .where('_id')
      .equals(workoutId)
      .populate('exercises.exercise');

    if (workout.length === 0) {
      return res.status(400).json({
        error: 'We dont have this Workout',
      });
    }

    res.json(workout);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
