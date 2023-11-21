import express, { Express } from 'express';
import * as userController from '../controllers/user.controller';
require('dotenv').config();

const router = express.Router();

const userRoute = (mainPath: string, app: Express) => {
    router.get('/', userController.VerifyAccount);
    return app.use(mainPath, router);
};

export default userRoute;
