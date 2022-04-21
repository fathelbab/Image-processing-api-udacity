import express, { Application } from 'express';
import { loggerMiddleware } from './middleware/logger';
import { errorPage } from './middleware/errorPage404';

// create the app object
export const app: Application = express();

// using the logger middleware and error page for the Application
app.use(loggerMiddleware);
