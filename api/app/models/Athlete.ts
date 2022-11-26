import { model, Schema } from 'mongoose';

export const Athlete = model(
  'Athlete',
  new Schema({
    name: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ['MASCULINO', 'FEMININO'],
      default: 'MASCULINO',
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  })
);
