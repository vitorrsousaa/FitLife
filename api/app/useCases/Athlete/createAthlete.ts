import { Request, Response } from 'express';
import { Athlete } from '../../models/Athlete';

export async function createAthlete(req: Request, res: Response) {
  try {
    const { name, gender, weight, height } = req.body;

    if (!name) {
      return res.status(400).json({
        error: 'Name is required',
      });
    }

    if (!weight) {
      return res.status(400).json({
        error: 'Weight is required',
      });
    }

    if (!height) {
      return res.status(400).json({
        error: 'Height is required',
      });
    }

    const athlete = await Athlete.create({ name, gender, weight, height });

    res.status(201).json(athlete);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
