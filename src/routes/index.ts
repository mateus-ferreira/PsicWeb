import { Router } from 'express';
import patientRouter from './patient';

const apiRouter: Router = Router();

apiRouter.use(patientRouter);

export default apiRouter;