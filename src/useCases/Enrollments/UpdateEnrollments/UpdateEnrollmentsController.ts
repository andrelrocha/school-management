import { NextFunction, Request, Response } from "express";

import { UpdateEnrollmentsUseCase } from "./UpdateEnrollmentsUseCase";

class UpdateEnrollmentsController {
    constructor(private updateEnrollmentsUseCase: UpdateEnrollmentsUseCase) { }

    async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            const { studentId, enrollmentId } = req.params;
            const { status } = req.body;

            const enrollment = await this.updateEnrollmentsUseCase.execute(status, enrollmentId, studentId);

            return res.status(200).send(enrollment);
        } catch (error) {
            return next(error) as unknown as Response<unknown, Record<string, unknown>>;
            
        }
    }
}

export { UpdateEnrollmentsController };