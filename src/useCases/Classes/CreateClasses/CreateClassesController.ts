import { NextFunction, Request, Response } from "express";

import { CreateClassesUseCase } from "./CreateClassesUseCase";

class CreateClassesController {
    constructor(private createClassesUseCase: CreateClassesUseCase) { }

    async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            const { startDate, levelId, teacherId } = req.body;

            const newClass = await this.createClassesUseCase.execute(startDate, levelId, teacherId);

            const newClassUrl = `${req.protocol}://${req.get("host")}${req.originalUrl}/${newClass.id}`;
            res.header("Location", newClassUrl);

            return res.status(201).send({ message: "Class created successfully", newClass });
        } catch (err) {
            return next(err) as unknown as Response<unknown, Record<string, unknown>>;
        }
    }
}

export { CreateClassesController };