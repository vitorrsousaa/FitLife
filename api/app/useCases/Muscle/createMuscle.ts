import { Request, Response } from 'express';
import { Muscle } from '../../models/Muscle';

export async function createMuscle(req: Request, res: Response) {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({
        error: 'Name is required!',
      });
    }

    const muscle = await Muscle.create({ name });

    res.json(muscle);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
