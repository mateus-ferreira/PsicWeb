import { Request, Response } from 'express';
import Database from '../database/Database';
import IPatient from "../types/interfaces/models/IPatient";
import joi from 'joi';
import { Types } from 'mongoose';
import logger from '../util/logger';

export class PatientController {
    public static async createNewPatient(req: Request<IPatient>, res: Response): Promise<void> {
        try {
           await Database.insert('patients', req.body);
           res.status(201).send(req.body)
        } catch (e) {
            logger.error(e);
            throw new Error();
        }
    }

    public static async getAllPatients(req: any, res: any): Promise<void> {
        try {
            res.status(200).send(await Database.find('patients') as IPatient[]);
        } catch (e) {
            logger.error(e);
            throw new Error();
        }
    }

    public static async getOnePatient(req: Request, res: any): Promise<void> {
        try {
            const schema = joi.object({ id: joi.string().hex().length(24).required() })
            const { id } = await schema.validateAsync(req.params);

            const patients: IPatient[] = await Database.find('patients', { _id: new Types.ObjectId(id) });
            res.status(200).send(patients);
        } catch (e) {
            logger.error(e);
            throw new Error();
        }
    }

    public static async updateOnePatient(req: any, res: any): Promise<void> {
        try {
            const schema = joi.object({ id: joi.string().hex().length(24).required() })
            const { id } = await schema.validateAsync(req.params);

            res.status(200).send(await Database.updateOne('patients', { _id: new Types.ObjectId(id) }, { $set: req.body }));
        } catch (e) {
            logger.error(e);
            throw new Error();
        }
    }

    public static async deleteOnePatient(req: any, res: any): Promise<void> {
        try {
            const schema = joi.object({ id: joi.string().hex().length(24).required() })
            const { id } = await schema.validateAsync(req.params);

            await Database.deleteOne('patients', { _id: new Types.ObjectId(id) });
            res.status(200).send('Deleted');
        } catch (e) {
            logger.error(e);
            throw new Error();
        }
    }
}