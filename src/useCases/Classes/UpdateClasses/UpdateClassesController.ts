import { NextFunction, Request, Response } from "express";

import { UpdateClassesUseCase } from "./UpdateClassesUseCase";

class UpdateClassesController {
    constructor(private updateClassesUseCase: UpdateClassesUseCase) { }

    async handle(request: Request, response: Response, next: NextFunction): Promise<Response> {
        try {
            const { startDate } = request.body;
            const { id } = request.params;

            await this.updateClassesUseCase.execute(id, startDate);

            return response.status(200).send({ message: "Class updated successfully!" });
        } catch (err) {
            return next(err) as unknown as Response<unknown, Record<string, unknown>>;
        }
    }
}

export { UpdateClassesController };
