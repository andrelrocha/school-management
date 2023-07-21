import { NextFunction, Request, Response } from "express"; 

import { ListClassesStatusUseCase } from "./ListClassesStatusUseCase";

class ListClassesStatusController {
    constructor(private listClassesStatusUseCase: ListClassesStatusUseCase) { }

    async handle(req: Request, res: Response, next: NextFunction): Promise<Response> { 
        try {
            const enrollment = await this.listClassesStatusUseCase.execute();   

            return res.status(200).send(enrollment);
        } catch (error) {
            return next(error) as unknown as Response<unknown, Record<string, unknown>>;
        }
    }
}

export { ListClassesStatusController };