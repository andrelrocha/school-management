import { Request, Response, NextFunction } from "express";

const errorHandlePagination = (req: Request, res: Response, next: NextFunction) => {
    let { limit = 5, page = 1 } = req.query;
    limit = Number(limit);
    page = Number(page);

    if (!(limit > 0 && page > 0)) {
        const err = new Error("One or more parameters are invalid. Page and limit must be positive numbers");
        return res.status(400).send({ error: err.message });
    }

    next();
};
  
export { errorHandlePagination };