import { NextFunction, Request, Response } from "express";

import { RestaurePeopleUseCase } from "./RestaurePeopleUseCase";

class RestaurePeopleController {
    constructor(private restaurePeopleUseCase: RestaurePeopleUseCase) { }

    async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            const { id } = req.params;

            const person = await this.restaurePeopleUseCase.execute(id);

            return res.status(200).send({ message: { "Person record restored": person } });
        } catch (err) {
            return next(err) as unknown as Response<unknown, Record<string, unknown>>;
        }    
    }
}

export { RestaurePeopleController };