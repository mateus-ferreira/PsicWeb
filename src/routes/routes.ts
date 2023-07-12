import { Router } from 'express';

export default Router().
    post('/patient', (req: any, res: any) => {
        res.send('Paciente cadastrado');
})
    .get('/patient', (req: any, res: any) => {
        res.send('Todos os pacientes');
});