import { Request, Response } from 'express';
import { Data } from '../../models/Data';

export async function createData(req: Request, res: Response) {
  try {
    const { athlete, exercises, workout } = req.body;

    // if (!athlete) {
    //   return res.status(400).json({
    //     error: 'Athlete is required!',
    //   });
    // }

    // if (!exercises) {
    //   return res.status(400).json({
    //     error: 'Exercises is required!',
    //   });
    // }
    // if (!workout) {
    //   return res.status(400).json({
    //     error: 'Workout is required!',
    //   });
    // }

    const data = await Data.create({ athlete, exercises, workout });

    res.status(201).json(data);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
