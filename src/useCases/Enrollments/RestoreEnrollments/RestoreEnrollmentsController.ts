import { NextFunction, Request, Response } from "express";

import { RestoreEnrollmentsUseCase } from "./RestoreEnrollmentsUseCase";

class RestoreEnrollmentsController {
    constructor(private restoreEnrollmentsUseCase: RestoreEnrollmentsUseCase) { }

    async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            const { enrollmentId } = req.params;

            const enrollments = await this.restoreEnrollmentsUseCase.execute(enrollmentId);

            return res.status(200).send({ message: { "Enrollment record restored": enrollments } });
        } catch (err) {
            return next(err) as unknown as Response<unknown, Record<string, unknown>>;
        }    
    }
}

export { RestoreEnrollmentsController };