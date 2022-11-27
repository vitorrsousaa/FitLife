import { Request, Response } from 'express';
import { Workout } from '../../models/Workout';

export async function listWorkoutByAthlete(req: Request, res: Response) {
  try {
    const { athleteId } = req.params;

    const workout = await Workout.find()
      .where('athlete')
      .equals(athleteId)
      .sort({ title: 1 });

    // if (workout.length === 0) {
    //   return res.status(400).json({
    //     error: 'We dont have Workout for this athlete',
    //   });
    // }

    res.json(workout);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
