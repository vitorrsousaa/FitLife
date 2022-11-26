import { Request, Response } from 'express';
import { Athlete } from '../../models/Athlete';

export async function listAthletesById(req: Request, res: Response) {
  try {
    const { athleteId } = req.params;

    const athlete = await Athlete.find().where('_id').equals(athleteId);

    if (athlete.length === 0) {
      return res.status(400).json({
        error: 'You dont have athletes',
      });
    }

    res.json(athlete);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
