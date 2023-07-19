import { NextFunction, Request, Response } from "express";

import { DeleteClassesUseCase } from "./DeleteClassesUseCase";

class DeleteClassesController {
    constructor(private deleteClassesUseCase: DeleteClassesUseCase) { }

    async handle(request: Request, response: Response, next: NextFunction): Promise<Response> {
        try {
            const { id } = request.params;

            await this.deleteClassesUseCase.execute(id);

            return response.status(204).send({message: "Class deleted successfully!"});
        } catch (err) {
            return next(err) as unknown as Response<unknown, Record<string, unknown>>;
        }
    }
}

export { DeleteClassesController };