import { NextFunction, Request, Response } from "express";

import { UpdatePeopleUseCase } from "./UpdatePeopleUseCase";

class UpdatePeopleController {
    constructor(private updatePeopleUseCase: UpdatePeopleUseCase) { }

    async handle(request: Request, response: Response, next: NextFunction) {
        try {
            const { id } = request.params;
            
            const { name, email, role } = request.body;

            const updatedPerson = await this.updatePeopleUseCase.execute({ id, name, email, role });

            return response.status(200).json(updatedPerson);
        } catch (error) {
            return next(error) as unknown as Response<unknown, Record<string, unknown>>;
        }
    }
}

export { UpdatePeopleController };