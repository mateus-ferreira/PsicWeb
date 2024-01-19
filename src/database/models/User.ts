import IUser from '../../types/interfaces/models/IUser';

export class User implements IUser {
    declare name: string;
    declare email: string;
    declare password: string;
    declare role: string;
}