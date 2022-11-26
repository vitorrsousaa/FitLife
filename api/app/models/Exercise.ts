import { model, Schema } from 'mongoose';

export const Exercise = model(
  'Exercise',
  new Schema({
    name: {
      type: String,
      required: true,
    },
    muscle: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Muscle',
    },
  })
);
