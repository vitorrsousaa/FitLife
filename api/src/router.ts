import { Router } from 'express';

import { createAthlete } from '../app/useCases/Athlete/createAthlete';
import { deleteAthlete } from '../app/useCases/Athlete/deleteAthlete';
import { listAthletes } from '../app/useCases/Athlete/listAthletes';
import { listAthletesById } from '../app/useCases/Athlete/listAthletesById';
import { createData } from '../app/useCases/Data/createData';
import { listData } from '../app/useCases/Data/listData';
import { listDataByAthlete } from '../app/useCases/Data/listDataByAthlete';
import { createExercise } from '../app/useCases/Exercise/createExercise';
import { listExerciseById } from '../app/useCases/Exercise/listExerciseById';
import { listExerciseByMuscle } from '../app/useCases/Exercise/listExerciseByMuscle';
import { listExercises } from '../app/useCases/Exercise/listExercises';
import { createMuscle } from '../app/useCases/Muscle/createMuscle';
import { listMuscles } from '../app/useCases/Muscle/listMuscles';
import { createWorkout } from '../app/useCases/Workout/createWorkout';
import { deleteWorkout } from '../app/useCases/Workout/deleteWorkout';
import { listWorkout } from '../app/useCases/Workout/listWorkout';
import { listWorkoutByAthlete } from '../app/useCases/Workout/listWorkoutByAthlete';
import { listWorkoutById } from '../app/useCases/Workout/listWorkoutById';
import { updateWorkout } from '../app/useCases/Workout/updateWorkout';

export const router = Router();

// List Muscle
router.get('/muscles', listMuscles);

// Create Muscle
router.post('/muscles', createMuscle);

// List Exercise
router.get('/exercises', listExercises);

// List Exercise By Id
router.get('/exercises/:exerciseId', listExerciseById);

// List Exercise by muscle
router.get('/exercises/:muscleId/muscle', listExerciseByMuscle);

// Create Exercise
router.post('/exercises', createExercise);

// Create Athlete
router.post('/athlete', createAthlete);

// List Athlete
router.get('/athlete', listAthletes);

// List Athlete by ID
router.get('/athlete/:athleteId', listAthletesById);

// Delete Athlete
router.delete('/athlete/:athleteId', deleteAthlete);

// List Workout
router.get('/workout', listWorkout);

// List Workout By Athlete
router.get('/workout/athlete/:athleteId', listWorkoutByAthlete);

// List Workout By Id
router.get('/workout/:workoutId', listWorkoutById);

// Create Workout
router.post('/workout', createWorkout);

// Change Workout
router.patch('/workout/:workoutId', updateWorkout);

// Delete Workout
router.delete('/workout/:workoutId', deleteWorkout);

// List Data by athlete
router.get('/data/:athleteId', listDataByAthlete);

// List Data
router.get('/data', listData);

// Create Data
router.post('/data/:athleteId', createData);
