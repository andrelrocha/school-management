import { NextFunction, Request, Response } from "express";

import { ListClassesUseCase } from "./ListClassesUseCase";

class ListClassesController {
    constructor(private listClassesUseCase: ListClassesUseCase) { }

    async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            let { limit = 5, page = 1 } = req.query;
            limit = Number(limit);
            page = Number(page);
            if (!(limit > 0 && page > 0)) {
                return next() as unknown as Response<unknown, Record<string, unknown>>;
            }

            const { order = "startDate:1", initialDate, finalDate } = req.query;

            const allClasses = await this.listClassesUseCase.execute(limit, page, order, initialDate, finalDate);
            return res.status(200).send(allClasses);
        } catch (error) {
            return res.status(500).send({ error: "Internal server error while loading the classes's database" });
        }
    }
}

export { ListClassesController };