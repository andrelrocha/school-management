import { NextFunction, Request, Response } from "express"; 

import { ListPeopleByIdUseCase } from "./ListPeopleByIdUseCase";

class ListPeopleByIdController {

    constructor(private listPeopleById: ListPeopleByIdUseCase) { }

    async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            const  { id } = req.params;
            
            const person = await this.listPeopleById.execute(id);

            return res.status(200).send(person);
        } catch (error) {
            return next(error) as unknown as Response<unknown, Record<string, unknown>>;
        }
    }
}

export { ListPeopleByIdController };