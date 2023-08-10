import { NextFunction, Request, Response } from "express";

import { CreatePeopleUseCase } from "./CreatePeopleUseCase";

class CreatePeopleController {

    constructor(private createPeople: CreatePeopleUseCase) { }

    async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            const { name, email, role } = req.body;

            const newPerson = await this.createPeople.execute({ name, email, role });

            const newPersonUrl = `${req.protocol}://${req.get("host")}${req.originalUrl}/${newPerson.id}`;
            res.header("Location", newPersonUrl);

            return res.status(201).send({ message: "Person created successfully", newPerson });
        } catch (err) {
            return next(err) as unknown as Response<unknown, Record<string, unknown>>;
        }
    }
}

export { CreatePeopleController };