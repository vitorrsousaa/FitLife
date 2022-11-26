import { Response, Request } from 'express';
import { Exercise } from '../../models/Exercise';

export async function createExercise(req: Request, res: Response) {
  try {
    const { name, muscle } = req.body;

    if (!name) {
      return res.status(400).json({
        error: 'Name is required!',
      });
    }

    if (!muscle) {
      return res.status(400).json({
        error: 'Muscle is required!',
      });
    }

    const exercise = await Exercise.create({ name, muscle });

    res.json(exercise);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
