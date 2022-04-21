import { Request, Response } from 'express';

export const errorPage = (req: Request, res: Response) => {
  res.status(404).send('404 Not Found');
};
