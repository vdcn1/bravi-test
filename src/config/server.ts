import express, { Router, Request, Response } from 'express';
import { database } from '../db/conn';
import { UserRoute } from '../routes/userRoute';
import morgan from 'morgan';
const app = express();
const route = Router();

app.use(express.json());

database();
morgan('dev');
route.get('/', (req: Request, res: Response) => {
  res.json({ message: 'hello world with Typescript' })
});

app.use(route);
app.use(new UserRoute().router);

app.listen(3000, () => 'server running on port 3000');