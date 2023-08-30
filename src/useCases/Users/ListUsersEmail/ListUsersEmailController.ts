import { NextFunction, Request, Response } from "express";

import { ListUsersEmail } from "./ListUsersEmailUseCase";

class ListUsersEmailController {

    constructor(private listUsersEmail: ListUsersEmail) { }

    async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            let { limit = 5, page = 1 } = req.query;
            limit = Number(limit);
            page = Number(page);
            if (!(limit > 0 && page > 0)) {
                return next() as unknown as Response<unknown, Record<string, unknown>>;
            }

            const { order = "email:1" } = req.query;

            const allUsers = await this.listUsersEmail.execute(limit, page, order);
            
            return res.status(200).json(allUsers);

        } catch (err) {
            return res.status(500).json({ error: "Internal server error while loading the user's database" }); 
        }
    }
}

export { ListUsersEmailController };