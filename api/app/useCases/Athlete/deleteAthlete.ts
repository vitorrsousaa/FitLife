import { Response, Request } from 'express';
import { Athlete } from '../../models/Athlete';

export async function deleteAthlete(req: Request, res: Response) {
  try {
    const { athleteId } = req.params;

    if (!athleteId) {
      return res.status(400).json({
        error: 'AthleteId is required',
      });
    }

    const athlete = await Athlete.findByIdAndDelete(athleteId);

    if (!athlete) {
      return res.status(400).json({
        error: 'This athlete does not exist!',
      });
    }

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
