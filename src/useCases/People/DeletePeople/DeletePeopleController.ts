import { NextFunction, Request, Response } from "express"; 

import { DeletePeopleUseCase } from "./DeletePeopleUseCase";

class DeletePeopleController {
    constructor(private deletePeopleUseCase: DeletePeopleUseCase) { }

    async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            const { id } = req.params;

            await this.deletePeopleUseCase.execute(id);

            return res.status(204).send();
        } catch (error) {
            return next(error) as unknown as Response<unknown, Record<string, unknown>>;
        }
    }
}

export { DeletePeopleController };