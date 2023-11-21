import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

export const signUp = async (req: Request, res: Response, next: NextFunction) => {
    const condition = Joi.object({
        phone: Joi.string().required(),
        password: Joi.string().required().min(6).message('Mật khẩu phải có ít nhất 6 ký tự'),
        ref: Joi.string().allow(''),
    });
    try {
        await condition.validateAsync(req.body, { abortEarly: false });
        next();
    } catch (error) {
        if (error instanceof Error) {
            // Nếu error là instance của Error, truy xuất message từ nó
            res.status(400).json({
                errors: error.message,
            });
        } else {
            // Nếu không, gửi một thông báo lỗi chung
            res.status(400).json({
                errors: 'An error occurred',
            });
        }
    }
};
