import mongoose from 'mongoose';
import { DB_URL } from '../config';

export const connect = () => {
  return mongoose.connect(DB_URL);
};
