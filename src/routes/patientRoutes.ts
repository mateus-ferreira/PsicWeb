import { Router } from 'express';
import { PatientController } from '../controllers/patientController';
import IPatient from "../types/interfaces/models/IPatient";

const patientRouter = Router();
patientRouter.post('/patients', async (req: any, res: any): Promise<void> => {
    await PatientController.createNewPatient(req, res);
});
patientRouter.get('/patients', async (req: any, res: any): Promise<void> => {
    await PatientController.getAllPatients(req, res);
});

patientRouter.get('/patients/:id', async (req: any, res: any): Promise<void> => {
    await PatientController.getOnePatient(req, res);
});

patientRouter.patch('/patients/:id', async (req: any, res: any): Promise<void> => {
    await PatientController.updateOnePatient(req, res);
});

patientRouter.delete('/patients/:id', async (req: any, res: any): Promise<void> => {
    await PatientController.deleteOnePatient(req, res);
});

export { patientRouter };