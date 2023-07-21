import { NextFunction, Request, Response } from "express"; 

import { ListEnrollmentsByClassUseCase } from "./ListEnrollmentsByClassUseCase";

class ListEnrollmentsByIdController {
    constructor(private listEnrollmentsByClassUseCase: ListEnrollmentsByClassUseCase) { }

    async handle(req: Request, res: Response, next: NextFunction): Promise<Response> { 
        try {
            const { classId } =  req.params;

            const enrollment = await this.listEnrollmentsByClassUseCase.execute(classId);   

            return res.status(200).send(enrollment);
        } catch (error) {
            return next(error) as unknown as Response<unknown, Record<string, unknown>>;
        }
    }
}

export { ListEnrollmentsByIdController };