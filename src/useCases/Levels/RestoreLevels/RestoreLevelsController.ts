import { NextFunction, Request, Response } from "express";

import { RestoreLevelsUseCase } from "./RestoreLevelsUseCase";

class RestoreLevelsController {
    constructor(private restoreLevelsUseCase: RestoreLevelsUseCase) { }

    async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            const { id } = req.params;

            const level = await this.restoreLevelsUseCase.execute(id);

            return res.status(200).send({ message: { "Level record restored": level } });
        } catch (err) {
            return next(err) as unknown as Response<unknown, Record<string, unknown>>;
        }    
    }
}

export { RestoreLevelsController };