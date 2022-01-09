import { createRouter } from '../utils';
import { router as userRouter } from './user';

export const router = createRouter();

router.use('/users', userRouter);