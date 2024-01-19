import { Router } from 'express';
import patientRouter from './patient';
import userRouter from './users';

const apiRouter: Router = Router();

apiRouter.use(patientRouter);
apiRouter.use(userRouter);

export default apiRouter;