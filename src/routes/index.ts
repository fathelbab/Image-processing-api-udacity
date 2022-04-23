import express from 'express';
import { Request, Response } from 'express';

const routes = express.Router();

routes.get('/', (req: Request, res: Response): void => {
  res.send('connected');
});

export default routes;
