import { Router } from 'express';
// import { isAuthenticated } from '../../middlewares/auth.middleware';
import { Serialize } from '../../middlewares/serializer.middleware';
import { Validate } from '../../middlewares/validations.middleware';
import { idValidator } from '../../validations';
import { FeedbackController } from './appointment.controller';
import {
  createExampleSerializer,
  listExampleSerializer,
} from './appointment.serializer';
import {
  createExampleValidation,
  updateExampleValidation,
} from './appointment.validation';

const AppointmentRouter = Router();
const Controller = new FeedbackController();

AppointmentRouter.post(
  '/',
  Validate({ b: createExampleValidation }),
  Serialize(createExampleSerializer),
  Controller.create
);

AppointmentRouter.patch(
  '/',
  Validate({ b: updateExampleValidation }),
  Controller.update
);

AppointmentRouter.get('/', Serialize(listExampleSerializer), Controller.find);

AppointmentRouter.delete(
  '/:id',
  // isAuthenticated,
  Validate({ p: idValidator }),
  Controller.delete
);
AppointmentRouter.delete(
  '/',
  // isAuthenticated,

  Controller.deleteAll
);

AppointmentRouter.get('/csv',  Controller.downloadAllData);




export { AppointmentRouter };
