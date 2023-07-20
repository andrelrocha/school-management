import { NextFunction, Request, Response } from "express";

import { RestoreClassesUseCase } from "./RestoreClassesUseCase";

class RestoreClassesController {
    constructor(private restoreClassesUseCase: RestoreClassesUseCase) { }

    async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            const { enrollmentId } = req.params;

            const classes = await this.restoreClassesUseCase.execute(enrollmentId);

            return res.status(200).send({ message: { "Class record restored": classes } });
        } catch (err) {
            return next(err) as unknown as Response<unknown, Record<string, unknown>>;
        }    
    }
}

export { RestoreClassesController };