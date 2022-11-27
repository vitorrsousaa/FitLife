import { Request, Response } from 'express';
import { Data } from '../../models/Data';

export async function listData(req: Request, res: Response) {
  try {
    const data = await Data.find()
      .populate('exercises.exercise')
      .populate('athlete');

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
