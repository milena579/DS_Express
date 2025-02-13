import express from 'express';
import initRoutes from './routes/routes.ts';
// import connectDB from './database/mon';


const app = express();
const port = 8080;
initRoutes(app);

app.listen(port, () => console.log(`Acesse: http://localhost:${port}/`));

// app.get('/getTeste', (req, res) => {
//     res.send('GET: Requisição recebida com sucesso!');
// });

// app.post('/register', (req, res) => {
//     res.send('POST: Requisição recebida com sucesso!');
// });