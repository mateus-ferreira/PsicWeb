import {Model, model, Schema} from 'mongoose';
import ISessionHistory from '../../interfaces/ISessionHistory';

const SessionHistorySchema = new Schema<ISessionHistory>({
    sessionDate: {
        type: Schema.Types.Date,
        required: true,
    },

    sessionNumber: {
        type: Schema.Types.Number,
        required: true,
    },

    annotation: {
        type: Schema.Types.String,
        required: true,
    },
});

export const SessionHistory = model<ISessionHistory>('SessionHistory', SessionHistorySchema);

export class Manager {
    public getModel(): Model<ISessionHistory> {
        return SessionHistory;
    }
}