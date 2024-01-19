import { Request, Response } from 'express';
import Database from '../database/Database';
import IPatient from "../types/interfaces/models/IPatient";
import { Types } from 'mongoose';
import logger from '../util/logger';

export class PatientController {
    public static async createNewPatient(req: Request<IPatient>, res: Response): Promise<IPatient> {
        try {
            await Database.insert('patients', req.body);
            res.status(201);
            return req.body;
        } catch (e) {
            logger.error(e);
            throw new Error();
        }
    }

    public static async getAllPatients(req: any, res: any): Promise<IPatient[]> {
        try {
            const patients: IPatient[] = await Database.find('patients');

            res.status(200);

            return patients;
        } catch (e) {
            logger.error(e);
            throw new Error();
        }
    }

    public static async getOnePatient(req: Request, res: Response): Promise<IPatient[]> {
        try {
            const { id } = req.params;

            const patients: IPatient[] = await Database.find('patients', { _id: new Types.ObjectId(id) });

            res.status(200);

            return patients;
        } catch (e) {
            logger.error(e);
            throw new Error();
        }
    }

    public static async updateOnePatient(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;

            await Database.updateOne('patients', { _id: new Types.ObjectId(id) }, { $set: req.body })

            res.status(204);
        } catch (e) {
            logger.error(e);
            throw new Error();
        }
    }

    public static async deleteOnePatient(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;

            await Database.deleteOne('patients', { _id: new Types.ObjectId(id) });
            res.status(204);
        } catch (e) {
            logger.error(e);
            throw new Error();
        }
    }
}