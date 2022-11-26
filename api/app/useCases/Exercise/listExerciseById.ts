import { Request, Response } from 'express';
import { Exercise } from '../../models/Exercise';

export async function listExerciseById(req: Request, res: Response) {
  try {
    const { exerciseId } = req.params;

    const exercise = await Exercise.find().where('_id').equals(exerciseId);

    if (exercise.length === 0) {
      return res.status(400).json({
        error: 'We dont have exercise for this id',
      });
    }

    res.json(exercise);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
