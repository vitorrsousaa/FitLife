import { Request, Response } from 'express';
import { Athlete } from '../../models/Athlete';
import { Data } from '../../models/Data';

export async function createData(req: Request, res: Response) {
  try {
    const { athleteId } = req.params;
    const { athlete, exercises } = req.body;

    const athletes = await Athlete.find().where('_id').equals(athleteId);

    const previousData = await Data.find().where('athlete').equals(athleteId);

    if (athletes.length === 0) {
      return res.status(400).json({
        error: 'This athlete does not exists!',
      });
    }

    if (previousData.length > 0) {
      return res.status(400).json({
        error: 'This athlete have has a data!',
      });
    }

    if (!athlete) {
      return res.status(400).json({
        error: 'Athlete is required!',
      });
    }

    if (!exercises) {
      return res.status(400).json({
        error: 'Exercises is required!',
      });
    }

    const data = await Data.create({ athlete, exercises });

    res.status(201).json(data);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
