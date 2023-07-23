import { Router } from 'express';
import { PatientController } from '../controllers/patientController';

const patientRouter = Router();
patientRouter.post('/patient', (req: any, res: any) => {
    res.send('Paciente cadastrado');
});
patientRouter.get('/patient', async (req: any, res: any): Promise<void> => {
    await PatientController.getAllPatients(req, res);
});

export { patientRouter };