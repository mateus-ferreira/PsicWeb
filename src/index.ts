import express from 'express';
import cors from 'cors';
import { patientRouter } from './routes';
import Database from './database/Database';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: ['http://localhost:3000']
}))

app.use('/api', patientRouter);

Database.init();

app.listen(process.env.PORT || 3000, () => {
    console.log('Rodando')
});