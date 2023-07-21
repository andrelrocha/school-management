import { NextFunction, Request, Response } from "express"; 

import { ListPeopleConfirmedEnrollmentUseCase } from "./ListPeopleConfirmedEnrollmentUseCase";

class ListPeopleConfirmedEnrollmentController {
    constructor(private listPeopleConfirmedEnrollmentUseCase: ListPeopleConfirmedEnrollmentUseCase) {}

    async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
        const { studentId } = req.params;

        try {
            const enrollments = await this.listPeopleConfirmedEnrollmentUseCase.execute(studentId);

            return res.status(200).send(enrollments);
        } catch (error) {
            return next(error) as unknown as Response<unknown, Record<string, unknown>>;
        }
    }
}

export { ListPeopleConfirmedEnrollmentController };