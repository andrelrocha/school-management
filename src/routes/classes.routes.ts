import { Router } from "express";

import { listClasses } from "../useCases/ListClasses";

const classesRoutes = Router();

classesRoutes.get("/", (req, res, next) => {
    return listClasses.handle(req, res, next);
});

export { classesRoutes };