import { Request, Response } from 'express';

export class PatientController {
    public static async getAllPatients(req: Request, res: Response): Promise<void> {
        try {
            res.status(200).send('OK');
        } catch (e) {
            console.error(e);
            res.status(500).send('erro');
        }
    }
}