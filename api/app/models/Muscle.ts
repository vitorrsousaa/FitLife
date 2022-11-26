import { model, Schema } from 'mongoose';

export const Muscle = model(
  'Muscle',
  new Schema({
    name: {
      type: String,
      required: true,
    },
  })
);
