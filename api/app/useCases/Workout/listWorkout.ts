import { Request, Response } from 'express';
import { Workout } from '../../models/Workout';

export async function listWorkout(req: Request, res: Response) {
  try {
    const workout = await Workout.find()
      .populate('exercises.exercise')
      .sort({ createdAt: -1 });

    if (workout.length === 0) {
      return res.status(400).json({
        error: 'You dont have Workout for this athlete',
      });
    }

    res.json(workout);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
