import { Router } from "express";

import { createClasses } from "../useCases/Classes/CreateClasses";
import { listClasses } from "../useCases/Classes/ListClasses";

const classesRoutes = Router();

classesRoutes.get("/", (req, res, next) => {
    return listClasses.handle(req, res, next);
});

classesRoutes.post("/", (req, res, next) => {
    return createClasses.handle(req, res, next);
});

export { classesRoutes };