import { NextFunction, Request, Response } from "express";

import { CreateEnrollmentsUseCase } from "./CreateEnrollmentsUseCase";

class CreateEnrollmentsController {
    constructor(private createEnrollmentsUseCase: CreateEnrollmentsUseCase) { }

    async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            const { status, classId } = req.body;
            const { studentId } = req.params;

            const newEnrollment = await this.createEnrollmentsUseCase.execute(studentId, classId, status);

            const newEnrollmentUrl = `${req.protocol}://${req.get("host")}${req.originalUrl}/${newEnrollment.id}`;
            res.header("Location", newEnrollmentUrl);

            return res.status(201).send({ message: "Enrollment created successfully", newEnrollment });
        } catch (err) {
            return next(err) as unknown as Response<unknown, Record<string, unknown>>;
        }
    }
}

export { CreateEnrollmentsController };