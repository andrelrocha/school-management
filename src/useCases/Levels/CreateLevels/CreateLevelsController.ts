import { NextFunction, Request, Response } from "express";

import { CreateLevelsUseCase } from "./CreateLevelsUseCase";

class CreateLevelsController {

    constructor(private createLevels: CreateLevelsUseCase) { }

    async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            const { desc_lvl } = req.body;

            const newLevel = await this.createLevels.execute(desc_lvl);

            return res.status(201).send({ message: "Level created successfully", newLevel });
        } catch (err) {
            return next(err) as unknown as Response<unknown, Record<string, unknown>>;
            
        }
    }
}

export { CreateLevelsController };