import { Request, Response } from 'express';
import { Muscle } from '../../models/Muscle';

export async function listMuscles(req: Request, res: Response) {
  try {
    const muscle = await Muscle.find();

    res.json(muscle);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
