import { Request, Response } from 'express';
import db from '../models';
import express from 'express';

export const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  (async () => {
    const allUsers = await db.users.findAll();
    res.header('Content-Type', 'application/json; charset=utf-8');
    res.status(200).send(allUsers);
  })();
});
