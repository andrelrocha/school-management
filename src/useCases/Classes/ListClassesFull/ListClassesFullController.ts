import { NextFunction, Request, Response } from "express"; 

import { ListClassesFullUseCase } from "./ListClassesFullUseCase";

class ListClassesFullController {
    constructor(private listClassesFullUseCase: ListClassesFullUseCase) { }

    async handle(req: Request, res: Response, next: NextFunction): Promise<Response> { 
        try {
            let { all = 0 } =  req.query;
            all = Number(all);

            const enrollment = await this.listClassesFullUseCase.execute(all);   

            return res.status(200).send(enrollment);
        } catch (error) {
            return next(error) as unknown as Response<unknown, Record<string, unknown>>;
        }
    }
}

export { ListClassesFullController };