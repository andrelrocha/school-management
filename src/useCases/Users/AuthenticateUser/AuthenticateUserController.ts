import { NextFunction, Request, Response } from "express";

import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

class AuthenticateUserController {

    constructor(private AuthenticateUser: AuthenticateUserUseCase) { }

    async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            const { email, password } = req.body;

            const userAuthenticated = await this.AuthenticateUser.execute({ email, password });

            return res.status(200).json({ message: "User authenticated", userAuthenticated });
        } catch (err) {
            return next(err) as unknown as Response<unknown, Record<string, unknown>>;
        }
    }
}

export { AuthenticateUserController };