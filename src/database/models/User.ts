import IUser from '../../interfaces/IUser';
import { model, Schema } from 'mongoose';

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