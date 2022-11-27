import { Request, Response } from 'express';
import { Data } from '../../models/Data';

export async function listDataByWorkout(req: Request, res: Response) {
  try {
    const { workoutId } = req.params;

    const data = await Data.find()
      .where('workout')
      .equals(workoutId)
      .populate('exercises.exercise')
      .populate('workout')
      .sort({ createdAt: -1 });

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
