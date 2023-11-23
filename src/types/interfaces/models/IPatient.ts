export default interface IPatient {
    name: string,
    CPF: number,
    RG: number,
    dateOfBirth: Date,
    motherName?: string | null,
    fatherName?: string | null,
    email: string,
    commercialAddress?: string | null,
    residentialAddress: string | null,
    role: string,
    commercialPhone?: number | null,
    personalPhone: number | null,
    emergencyPhone?: number | null,
    sessionHistory: string,
    anamnesis: string,
    psychologicalEvaluation: string,
    clinicalRecord: string,
}