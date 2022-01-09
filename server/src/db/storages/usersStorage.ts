import { BackendUser } from 'shared/types';
import { UserModel } from '../../models';
import { BaseStorage } from './baseStorage';

class UserStorageImpl extends BaseStorage<BackendUser> {}

export const UserStorage = new UserStorageImpl(UserModel);
