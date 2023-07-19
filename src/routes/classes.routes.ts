import { Router } from "express";

import { createClasses } from "../useCases/Classes/CreateClasses";
import { deleteClasses } from "../useCases/Classes/DeleteClasses";
import { listClasses } from "../useCases/Classes/ListClasses";
import { updateClasses } from "../useCases/Classes/UpdateClasses";

const classesRoutes = Router();

classesRoutes.get("/", (req, res, next) => {
    return listClasses.handle(req, res, next);
});

classesRoutes.post("/", (req, res, next) => {
    return createClasses.handle(req, res, next);
});

classesRoutes.put("/:id", (req, res, next) => {
    return updateClasses.handle(req, res, next);
});

classesRoutes.delete("/:id", (req, res, next) => {
    return deleteClasses.handle(req, res, next);
});

export { classesRoutes };