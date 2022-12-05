import express, { Router, Request, Response } from 'express';
import { connect } from 'mongoose';
import { database } from '../db/conn';
import { UserRoute } from '../routes/userRoute';

const app = express();
const route = Router();

app.use(express.json());

database();

route.get('/', (req: Request, res: Response) => {
  res.json({ message: 'hello world with Typescript' })
});

app.use(route);
app.use(new UserRoute().router);

app.listen(3000, () => 'server running on port 3000');