import { Request, Response } from 'express';
import IPatient from "../interfaces/IPatient";
import { Types } from 'mongoose';
import logger from '../util/logger';
import {Patient} from "../database/models/Patient";

export class PatientController {
    public static async createNewPatient(req: Request<IPatient>, res: Response): Promise<IPatient> {
        try {
            await Patient.create(req.body);
            res.status(201);
            return req.body;
        } catch (e) {
            logger.error(e);
            throw new Error();
        }
    }

    public static async getAllPatients(req: Request, res: Response<IPatient[]>): Promise<IPatient[]> {
        try {
            const patients: IPatient[] = await Patient.find().lean();

            res.status(200);

            return patients;
        } catch (e) {
            logger.error(e);
            throw new Error();
        }
    }

    public static async getOnePatient(req: Request, res: Response<IPatient[]>): Promise<IPatient[]> {
        try {
            const { id } = req.params;

            const patients: IPatient[] = await Patient.find({ _id: new Types.ObjectId(id) }).lean();

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

            await Patient.updateOne({ _id: new Types.ObjectId(id) }, { $set: req.body }).lean();

            res.status(204);
        } catch (e) {
            logger.error(e);
            throw new Error();
        }
    }

    public static async deleteOnePatient(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;

            await Patient.deleteOne({ _id: new Types.ObjectId(id) }).lean();
            res.status(204);
        } catch (e) {
            logger.error(e);
            throw new Error();
        }
    }
}