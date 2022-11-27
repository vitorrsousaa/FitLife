import { model, Schema } from 'mongoose';

export const Workout = model(
  'Workout',
  new Schema({
    title: {
      type: String,
      required: true,
    },
    athlete: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Athlete',
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
            type: Schema.Types.ObjectId,
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
