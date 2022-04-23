import { Request, Response } from 'express';

export const errorPage = async  (req: Request, res: Response): Promise<void> => {
  res.status(404).send('404 Not Found');
};
