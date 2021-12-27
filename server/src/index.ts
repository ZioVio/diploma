import './config/configure-env';

import express from 'express';

import { PORT } from './config';
import { connect } from './db/connect';

const app = express();

app.listen(PORT, () => {
  console.log(`App started on port ${PORT}`);
});

app.use('*', (req, res) => {
  res.json({
    yes: 'YES',
  });
});

console.log('Connecting to db...');
connect()
  .then(() => {
    console.log('Connected to db');
  })
  .catch(err => {
    console.log(`Failed to connect to db. ${err.message}`);
  });
