import express from 'express';
import initRoutes from './routes/routes.ts';
import connectDB from './database/database.ts';
// import connectDB from './database/mon';

const app = express();
const port = 8080;
initRoutes(app);

app.listen(port, () => console.log(`Acesse: http://localhost:${port}/`));

connectDB();
initRoutes(app);
