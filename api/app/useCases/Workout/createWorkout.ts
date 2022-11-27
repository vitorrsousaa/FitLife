import { Request, Response } from 'express';
import { Workout } from '../../models/Workout';

export async function createWorkout(req: Request, res: Response) {
  try {
    const { title, muscle, athlete, description, exercises } = req.body;

    if (!title) {
      return res.status(400).json({
        error: 'Title is required',
      });
    }

    if (!athlete) {
      return res.status(400).json({
        error: 'Athlete is required',
      });
    }

    if (!exercises) {
      return res.status(400).json({
        error: 'Exercises is required',
      });
    }

    const workout = await Workout.create({
      title,
      muscle,
      athlete,
      description,
      exercises,
    });

    res.status(201).json(workout);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
