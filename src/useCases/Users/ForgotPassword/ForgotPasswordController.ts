import { NextFunction, Request, Response } from "express";

import { ForgotPasswordUseCase } from "./ForgotPasswordUseCase";

class ForgotPasswordController {

    constructor(private forgotPassword: ForgotPasswordUseCase) { }

    async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            const { email } = req.body;

            await this.forgotPassword.execute(email);

            return res.status(200).json({ message: "Email sent" });
        } catch (err) {
            return next(err) as unknown as Response<unknown, Record<string, unknown>>;
        }
    }
}

export { ForgotPasswordController };