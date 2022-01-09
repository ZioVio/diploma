import mongoose from 'mongoose';
import { BackendUser } from 'shared/types';

const userSchema = new mongoose.Schema<BackendUser>({
  fullName: {
    type: String,
    trim: true,
    required: false,
    defaultValue: null,
  },
  photoUrl: {
    type: String,
    trim: true,
    required: false,
    defaultValue: null,
  },
});

export const UserModel = mongoose.model('user', userSchema);
