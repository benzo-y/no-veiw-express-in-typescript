import { Request, Response } from 'express';
import db from '../models';

/* GET users listing. */
export const index = (req: Request, res: Response) => {
  (async () => {
    console.log('start');
    const count = await db.users.count();
    console.log(count);

    const newUser = new db.users();
    newUser.username = `hoge${count + 1}`;
    newUser.email = `hoge${count + 1}@example.com`;
    newUser.created_at = new Date();
    newUser.updated_at = new Date();

    await db.users.create(newUser.dataValues);

    const allUsers = await db.users.findAll();
    console.log(allUsers);

    res.send('respond with a resource');
  })();
};
