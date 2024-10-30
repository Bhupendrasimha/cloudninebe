import { required } from 'joi';
import mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    date: { type: String, required: true },
    number: { type: String, required: true },
    time: { type: String, required: true },
    hospital: {
      type: String,
      required: true,
    },
    reason: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const Appointment = mongoose.model('Appointment', schema, 'Appointment');
