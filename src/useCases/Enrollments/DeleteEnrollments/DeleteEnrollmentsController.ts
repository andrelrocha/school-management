import { NextFunction, Request, Response } from "express";

import { DeleteEnrollmentsUseCase } from "./DeleteEnrollmentsUseCase";

class DeleteEnrollmentsController {
    constructor(private deleteEnrollmentsUseCase: DeleteEnrollmentsUseCase) { }

    async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            const { studentId, enrollmentId } = req.params;

            await this.deleteEnrollmentsUseCase.execute(studentId, enrollmentId);

            return res.status(204).send();
        } catch (error) {
            return next(error) as unknown as Response<unknown, Record<string, unknown>>;
            
        }
    }
}

export { DeleteEnrollmentsController };