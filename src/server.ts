import express, { Request, Response } from 'express';
import createError from 'http-errors';
import helmet from 'helmet';
import cors from 'cors';
require('dotenv').config();

import { connectDB } from './configs/database';
import initWebRouter from './routes';

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));

initWebRouter(app);

app.use((req, res, next) => {
    next(createError.NotFound('This route does not exist.'));
});

interface Error {
    status?: number;
    message?: string;
}

app.use((err: Error, req: Request, res: Response) => {
    const statusCode = err.status || 500;
    res.status(statusCode).json({
        status: statusCode,
        message: err.message || 'Internal Server Error',
    });
});

const PORT = process.env.PORT;

app.listen(PORT, async () => {
    try {
        await connectDB();
        console.log('Connection Database successfully.');
        console.log('Server started on port:', PORT);
    } catch (error) {
        if (error instanceof Error) {
            console.error('Kết nối tới database thất bại:', error.message);
        }
    }
});
