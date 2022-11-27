import { Request, Response } from 'express';
import { Data } from '../../models/Data';

export async function listData(req: Request, res: Response) {
  try {
    const { athleteId } = req.params;

    const data = await Data.find()
      .where('athlete')
      .equals(athleteId)
      .populate('exercises.exercise');

    if (data.length === 0) {
      return res.status(400).json({
        error: 'This athlete does not have a data!',
      });
    }

    res.status(201).json(data);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
