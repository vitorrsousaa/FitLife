import { Response, Request } from 'express';
import { Exercise } from '../../models/Exercise';

export async function listExercises(req: Request, res: Response) {
  try {
    const exercises = await Exercise.find();

    res.json(exercises);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
