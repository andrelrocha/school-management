import { NextFunction, Request, Response } from "express";

import { ResetPasswordUseCase } from "./ResetPasswordUseCase";

class ResetPasswordController {

    constructor(private resetPassword: ResetPasswordUseCase) { }

    async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            const { token, email, password } = req.body;

            const userWithNewPassword = await this.resetPassword.execute({ token, email, password });

            return res.status(200).json(userWithNewPassword);
        } catch (err) {
            return next(err) as unknown as Response<unknown, Record<string, unknown>>;
        }
    }
}

export { ResetPasswordController };