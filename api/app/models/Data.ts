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
    exercises: {
      required: true,
      type: [
        {
          _id: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'Exercise',
          },
          name: {
            type: String,
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
                sets: {
                  type: Number,
                  required: true,
                },
                data: {
                  required: true,
                  type: [
                    {
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
        },
      ],
    },
  })
);
