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

router.get('/:id', (req: Request, res: Response) => {
  (async () => {
    const user = await db.users.findByPk(req.params.id);
    res.header('Content-Type', 'application/json; charset=utf-8');
    res.status(200).send(user);
  })();
});

router.post('/', (req: Request, res: Response) => {
  (async () => {
    const newUser = new db.users();
    const tmpDate = new Date();

    newUser.username = req.body.username;
    newUser.email = req.body.email;
    newUser.created_at = tmpDate;
    newUser.updated_at = tmpDate;

    try {
      await db.users.create(newUser.dataValues);
      res.send('ok');
    } catch (error: unknown) {
      res.status(400).send('ng');
    }
  })();
});

router.post('/:id', (req: Request, res: Response) => {
  (async () => {
    const newUser = new db.users();
    const tmpDate = new Date();

    newUser.username = req.body.username;
    newUser.email = req.body.email;
    newUser.created_at = tmpDate;
    newUser.updated_at = tmpDate;

    try {
      await db.users.update(newUser.dataValues, {
        where: { id: req.params.id },
      });
      res.send('ok');
    } catch (error: unknown) {
      res.status(400).send('ng');
    }
  })();
});

router.delete('/:id', (req: Request, res: Response) => {
  (async () => {
    try {
      await db.users.destroy({
        where: { id: req.params.id },
      });
      res.send('ok');
    } catch (error: unknown) {
      res.status(400).send('ng');
    }
  })();
});
