import { Request, Response } from 'express';
import { Workout } from '../../models/Workout';

export async function updateWorkout(req: Request, res: Response) {
  try {
    const { workoutId } = req.params;

    const body = req.body;
    const bodyKeys = Object.keys(body);

    const workout = await Workout.find().where('_id').equals(workoutId);

    if (workout.length === 0) {
      return res.status(400).json({
        error: 'We dont have workout for this id',
      });
    }

    const workoutKeys = Object.keys(workout[0].toObject());

    const whichElement = bodyKeys.every((keys) => workoutKeys.includes(keys));

    if (!whichElement) {
      return res.status(400).json({
        error: 'There is no such key in this Workout',
      });
    }

    await Workout.findByIdAndUpdate(workoutId, body);

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
