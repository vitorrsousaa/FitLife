import { model, Schema } from 'mongoose';

export const Workout = model(
  'Workout',
  new Schema({
    title: {
      type: String,
      required: true,
    },
    muscle: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Muscle',
    },
    athlete: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Athlete',
    },
    description: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    exercises: {
      required: true,
      type: [
        {
          exercise: {
            type: Schema.Types.Mixed,
            required: true,
            ref: 'Exercise',
          },
          sets: {
            type: Number,
            default: 1,
            required: true,
          },
          minRange: {
            type: Number,
            required: true,
          },
          maxRange: {
            type: Number,
            required: true,
          },
          description: {
            type: String,
            required: false,
          },
        },
      ],
    },
  })
);
