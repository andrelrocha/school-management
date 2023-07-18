import { NextFunction, Request, Response } from "express"; 

import { ListEnrollmentsByIdUseCase } from "./ListEnrollmentsByIdUseCase";

class ListEnrollmentsByIdController {
    constructor(private listEnrollmentsByIdUseCase: ListEnrollmentsByIdUseCase) { }

    async handle(req: Request, res: Response, next: NextFunction): Promise<Response> { 
        try {
            const { studentId, enrollmentId } =  req.params;

            const enrollment = await this.listEnrollmentsByIdUseCase.execute(enrollmentId, studentId);   

            return res.status(200).send(enrollment);
        } catch (error) {
            return next(error) as unknown as Response<unknown, Record<string, unknown>>;
        }
    }
}

export { ListEnrollmentsByIdController };