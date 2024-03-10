import {Request, Response} from "express";
import logger from "../util/logger";
import IUser from "../interfaces/IUser";
import {Types} from "mongoose";
import {User} from "../database/models/User";

export class UserController {
    public static async createNewUser(req: Request, res: Response): Promise<void> {
        try {
            await User.create(req.body);
            res.status(201);
            return req.body;
        } catch (e) {
            logger.error(e);
            throw new Error();
        }
    }

    public static async getAllUsers(req: Request, res: Response): Promise<IUser[]> {
        try {
            const users = await User.find();
            res.status(200);
            return users;
        } catch (e) {
            logger.error(e);
            throw new Error();
        }
    }

    public static async getOneUser(req: Request, res: Response): Promise<IUser[]> {
        const { id } = req.params;

        try {
            const user = await User.find({ id: new Types.ObjectId(id) }) as IUser[];
            res.status(200);
            return user;
        } catch (e) {
            logger.error(e);
            throw new Error();
        }
    }

    public static async updateOneUser(req: Request, res: Response): Promise<void> {
        const { id } = req.params;

        try {
            await User.updateOne({ id: new Types.ObjectId(id) }, { $set: req.body });
            res.status(200).send('Updated!');
        } catch (e) {
            logger.error(e);
            throw new Error();
        }
    }

    public static async deleteOneUser(req: Request, res: Response): Promise<void> {
        const { id } = req.params;

        try {
            await User.deleteOne({ _id: new Types.ObjectId(id) });
            res.status(200).send('Deleted');
        } catch (e) {
            logger.error(e);
            throw new Error();
        }
    }
}