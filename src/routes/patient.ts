import {Request, Response, Router} from 'express';
import { PatientController } from '../controllers/patientController';
import IPatient from "../types/interfaces/models/IPatient";

const patientRouter: Router = Router();
patientRouter.post('/patients', async (req: Request<IPatient>, res: Response): Promise<(IPatient | any)> => {
    await PatientController.createNewPatient(req, res);
});
patientRouter.get('/patients', async (req: Request, res: Response): Promise<(IPatient[] | any)> => {
    await PatientController.getAllPatients(req, res);
});

patientRouter.get('/patients/:id', async (req: Request, res: Response): Promise<(IPatient | any)> => {
    await PatientController.getOnePatient(req, res);
});

patientRouter.patch('/patients/:id', async (req: Request, res: Response): Promise<void> => {
    await PatientController.updateOnePatient(req, res);
});

patientRouter.delete('/patients/:id', async (req: Request, res: Response): Promise<void> => {
    await PatientController.deleteOnePatient(req, res);
});

export default patientRouter;