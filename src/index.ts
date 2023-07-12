import express from 'express';
import cors from 'cors';
import routes from './routes/routes';

const app = express();

app.get('/', (req: any, res: any) => {
    res.send('Bem-vindo!')
});

app.use(routes);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(cors({
//     origin: ['http://localhost:3000']
// }));

app.listen(process.env.PORT || 3000, () => {
    console.log('Rodando')
});