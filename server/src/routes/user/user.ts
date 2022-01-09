import { createResponseMessage } from './../../utils/createResponseMessage';
import expressAsyncHandler from 'express-async-handler';
import { StatusCodes } from 'http-status-codes';
import { BackendUser } from 'shared/types';
import { UserStorage } from '../../db/storages';
import { createRouter } from '../../utils';

export const router = createRouter();

router.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const user = await UserStorage.getById(req.params.id);
    if (user) {
      res.json(user);
      return;
    }
    res
      .status(StatusCodes.BAD_REQUEST)
      .json(createResponseMessage('User not found'));
  }),
);

router.post(
  '/',
  expressAsyncHandler(async (req, res) => {
    const user: BackendUser = req.body;
    await UserStorage.create(user);
    res.status(StatusCodes.CREATED).json(user);
  }),
);
