import { NextFunction, Request, Response } from "express";

import { UpdateLevelsUseCase } from "./UpdateLevelsUseCase";

class UpdateLevelsController {
    constructor(private updateLevelsUseCase: UpdateLevelsUseCase) { }

    async handle(request: Request, response: Response, next: NextFunction): Promise<Response> {
        const { id } = request.params;
        const { desc_lvl } = request.body;

        try {
            await this.updateLevelsUseCase.execute(desc_lvl, id);

            return response.status(200).send({ message: "Level updated successfully!"});
        } catch (err) {
            return next(err) as unknown as Response<unknown, Record<string, unknown>>;
        }
    }
}

export { UpdateLevelsController };