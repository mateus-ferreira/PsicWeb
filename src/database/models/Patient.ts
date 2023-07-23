import IPatient from '../../types/interfaces/models/IPatient';

//todo adicionar 'extends Model<IPatient>' quando o banco estiver feito
export class Patient implements IPatient {
    declare id: string;
    declare name: string;
    declare CPF: number;
    declare RG: number;
    declare dateOfBirth: Date;
    declare motherName?: string | null;
    declare fatherName?: string | null;
    declare email: string;
    declare commercialAddress?: string | null;
    declare residentialAddress: string | null;
    declare role: string;
    declare commercialPhone?: number | null;
    declare personalPhone: number | null;
    declare emergencyPhone?: number | null;
    declare sessionHistory: string;
    declare anamnesis: string;
    declare psychologicalEvaluation: string;
    declare clinicalRecord: string;
}