import { model, Schema } from 'mongoose';

export const Data = model(
  'Data',
  new Schema({
    athlete: {
      type: String,
      required: true,
      ref: 'Athlete',
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    workout: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Workout',
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
          info: {
            required: true,
            type: [
              {
                createdAt: {
                  type: Date,
                  default: Date.now,
                },

                charge: {
                  type: Number,
                  required: true,
                },
                reps: {
                  type: Number,
                  required: true,
                },
              },
            ],
          },
        },
      ],
    },
  })
);
