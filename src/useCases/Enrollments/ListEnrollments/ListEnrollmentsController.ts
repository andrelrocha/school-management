import { NextFunction, Request, Response } from "express";

import { ListEnrollmentsUseCase } from "./ListEnrollmentsUseCase";

class ListEnrollmentsController {
    constructor(private listEnrollmentsUseCase: ListEnrollmentsUseCase) { }

    async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            let { limit = 5, page = 1 } = req.query;
            limit = Number(limit);
            page = Number(page);

            if (!(limit > 0 && page > 0)) {
                const err = new Error("One or more parameters are invalid. Page and limit must be positive numbers");
                return next(err) as unknown as Response<unknown, Record<string, unknown>>;
            }

            const { order = "id:1" } = req.query;

            const enrollments = await this.listEnrollmentsUseCase.execute(limit, page, order);

            return res.status(200).send(enrollments);
        } catch (error) {
            return res.status(500).send({ error: "Internal server error while loading the enrollments's database" });
        }
    }
}

export { ListEnrollmentsController };