import { NextFunction, Request, Response } from "express";

import { DeleteLevelsUseCase } from "./DeleteLevelsUseCase";

class DeleteLevelsController {
    constructor(private deleteLevelsUseCase: DeleteLevelsUseCase) { }

    async handle(request: Request, response: Response, next: NextFunction): Promise<Response> {
        const { id } = request.params;

        try {
            await this.deleteLevelsUseCase.execute(id);

            return response.status(204).send({ message: "Level deleted successfully!" });
        } catch (err) {
            return next(err) as unknown as Response<unknown, Record<string, unknown>>;
        }
    }
}

export { DeleteLevelsController };