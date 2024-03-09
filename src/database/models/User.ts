import IUser from '../../interfaces/IUser';
import { Model, model, Schema } from 'mongoose';

const UserSchema = new Schema<IUser>({
    name: {
        type: Schema.Types.String,
        required: true,
        trim: true,
    },

    email: {
        type: Schema.Types.String,
        required: true,
        trim: true,
    },

    password: {
        type: Schema.Types.String,
        required: true,
        trim: true,
    },

    role: {
        type: [ Schema.Types.String ],
        required: true,
    },
});

export const User = model<IUser>('User', UserSchema);

export class Manager {
    public getModel(): Model<IUser> {
        return User;
    }
}