import { NextFunction, Request, Response } from 'express';

export const VerifyAccount = async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.status(200).json({
            status: 200,
            message: 'Welcome to the world!',
        });
    } catch (error) {
        console.log(error);
    }
};
