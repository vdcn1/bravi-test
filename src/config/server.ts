import express, { Router, Request, Response } from 'express';
import { database } from '../db/conn';
import { UserRoute } from '../routes/userRoute';
import morgan from 'morgan';
import cors from 'cors';
const app = express();
const route = Router();

app.use(express.json());

database();
morgan('dev');
let corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}


app.use(cors(corsOptions))

route.get('/', (req: Request, res: Response) => {
  res.json({ message: 'hello world with Typescript' })
});

app.use(route);
app.use(new UserRoute().router);

app.listen(3000, () => 'server running on port 3000');