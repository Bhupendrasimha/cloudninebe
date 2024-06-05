import joi = require('joi');
import { stringRequired, string } from '../../validations';

export const createExampleValidation = joi.object({
  name: stringRequired,
  email: stringRequired,
  date:stringRequired,
  number:stringRequired,
  time:stringRequired,
  hospital:stringRequired
});

export const updateExampleValidation = joi.object({
  query: joi.object({
    _id: stringRequired,
  }),
  payload: joi.object({
    name: stringRequired,
    email: stringRequired,
    date:stringRequired,
    number:stringRequired,
    time:stringRequired,
    hospital:stringRequired
  }),
});
