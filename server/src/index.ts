import './config/configure-env';

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import { PORT } from './config';
import { connect } from './db/connect';
import { router } from './routes';

const app = express();

app.use(cors());
app.use(morgan('dev'));

app.use('/api', router);

app.listen(PORT, () => {
  console.log(`App started on port ${PORT}`);
});

console.log('Connecting to db...');
connect()
  .then(() => {
    console.log('Connected to db');
  })
  .catch(err => {
    console.log(`Failed to connect to db. ${err.message}`);
  });
