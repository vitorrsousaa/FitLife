import { Request, Response } from 'express';
import { Data } from '../../models/Data';

export async function listDataByAthlete(req: Request, res: Response) {
  try {
    const { athleteId } = req.params;

    const data = await Data.find()
      .where('athlete')
      .equals(athleteId)
      .populate('exercises.exercise')
      .populate('workout')
      .sort({ createdAt: -1 });

    res.status(201).json(data);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
