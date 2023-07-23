import express from 'express';
import cors from 'cors';
import { patientRouter } from './routes';

const app = express();

app.get('/', (req: any, res: any) => {
    res.send('Bem-vindo!')
});

app.use(patientRouter);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(cors({
//     origin: ['http://localhost:3000']
// }));

app.listen(process.env.PORT || 3000, () => {
    console.log('Rodando')
});