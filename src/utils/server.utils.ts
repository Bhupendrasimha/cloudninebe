const express = require('express');
const logger = require('morgan');
const cors= require('cors')
import router from '../routes';


export const init = () => {
  const app = express();

  app.use(cors())
  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.use('/api/v1', router);

  return app;
};
