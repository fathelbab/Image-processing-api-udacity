import { app } from './app';
import 'dotenv/config';
import { Request, Response, NextFunction } from 'express';
import routes from './routes/index';
import image from './routes/api/getImage';
import sharp from 'sharp';
import fs from 'fs';

// parse the port from .env file
const port = process.env.PORT || 3000;

// app.use('/api', routes);
app.use('/api/images', image);

// start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
