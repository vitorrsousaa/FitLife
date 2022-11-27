import { Request, Response } from 'express';
import { Exercise } from '../../models/Exercise';

export async function listExerciseByMuscle(req: Request, res: Response) {
  try {
    const { muscleId } = req.params;

    if (!muscleId) {
      return res.status(400).json({
        error: 'muscleId is required!',
      });
    }

    const exercises = await Exercise.find().where('muscle').equals(muscleId);

    console.log(exercises);

    if (exercises.length === 0) {
      return res.status(400).json({
        error: 'We dont have exercise for this muscle',
      });
    }

    res.json(exercises);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
