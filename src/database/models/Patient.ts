import IPatient from '../../interfaces/IPatient';
import { model, Schema } from 'mongoose';

const PatientSchema = new Schema<IPatient>({
    name: {
        type: Schema.Types.String,
        required: true,
        trim: true,
    },

    CPF: {
        type: Schema.Types.Number,
        required: true,
        trim: true,
    },

    RG: {
        type: Schema.Types.Number,
        required: true,
        trim: true,
    },

    dateOfBirth: {
        type: Schema.Types.Date,
        required: true,
    },

    motherName: {
        type: Schema.Types.String,
        trim: true,
    },

    fatherName: {
        type: Schema.Types.String,
        trim: true,
    },

    email: {
        type: Schema.Types.String,
        trim: true,
    },

    commercialAddress: {
        type: Schema.Types.String,
        trim: true,
    },

    residentialAddress: {
        type: Schema.Types.String,
        required: true,
        trim: true,
    },

    profession: {
        type: Schema.Types.String,
        required: true,
        trim: true,
    },

    commercialPhone: {
        type: Schema.Types.Number,
        trim: true,
    },

    personalPhone: {
        type: Schema.Types.Number,
        required: true,
        trim: true,
    },

    emergencyPhone: {
        type: Schema.Types.Number,
        trim: true,
    },

    sessionHistory: {
        type: Schema.Types.ObjectId,
        ref: 'SessionHistory',
    },

    anamnesis: {
        type: Schema.Types.String,
        required: true,
        trim: true,
    },

    psychologicalEvaluation: {
        type: Schema.Types.String,
        trim: true,
    },

    clinicalRecord: {
        type: Schema.Types.String,
        trim: true,
    },
}, {
    collection: 'patients',
});

export const Patient = model<IPatient>('Patient', PatientSchema);