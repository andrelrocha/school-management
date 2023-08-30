import { NextFunction, Request, Response } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {

    constructor(private createUser: CreateUserUseCase) { }

    async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            const { name, email, password } = req.body;

            const newUser = await this.createUser.execute({ name, email, password });

            const newUserUrl = `${req.protocol}://${req.get("host")}${req.originalUrl}/${newUser.id}`;
            res.header("Location", newUserUrl);

            return res.status(201).send({ message: "User created successfully", newUser });
        } catch (err) {
            return next(err) as unknown as Response<unknown, Record<string, unknown>>;
        }
    }
}

export { CreateUserController };