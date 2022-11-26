import { Response, Request } from 'express';
import { Workout } from '../../models/Workout';

export async function deleteWorkout(req: Request, res: Response) {
  try {
    const { workoutId } = req.params;

    if (!workoutId) {
      return res.status(400).json({
        error: 'AthleteId is required',
      });
    }

    const workout = await Workout.findByIdAndDelete(workoutId);

    if (!workout) {
      return res.status(400).json({
        error: 'This workout does not exist!',
      });
    }

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
