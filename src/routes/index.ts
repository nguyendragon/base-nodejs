import express, { Express, NextFunction, Request, Response } from 'express';
import userRoute from './user.route';

const router = express.Router();

const initWebRouter = (app: Express) => {
    userRoute('/api/v1/users', app);
};

export default initWebRouter;
