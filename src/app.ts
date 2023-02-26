import express from 'express';
import * as usersRouter from './routes/users';

const app = express();

app.use('/users', usersRouter.router);

export default app;
