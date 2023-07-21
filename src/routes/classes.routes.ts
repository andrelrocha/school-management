import { Router } from "express";

import { createClasses } from "../useCases/Classes/CreateClasses";
import { deleteClasses } from "../useCases/Classes/DeleteClasses";
import { listClasses } from "../useCases/Classes/ListClasses";
import { listClassesFull } from "../useCases/Classes/ListClassesFull";
import { restoreClasses } from "../useCases/Classes/RestoreClasses";
import { updateClasses } from "../useCases/Classes/UpdateClasses";

import { listEnrollmentsByClass } from "../useCases/Enrollments/ListEnrollmentsByClass";

const classesRoutes = Router();

classesRoutes.get("/", (req, res, next) => {
    return listClasses.handle(req, res, next);
});

classesRoutes.get("/full", (req, res, next) => {
    return listClassesFull.handle(req, res, next);
});

classesRoutes.get("/:classId/enrollments", (req, res, next) => {
    return listEnrollmentsByClass.handle(req, res, next);
});

classesRoutes.post("/", (req, res, next) => {
    return createClasses.handle(req, res, next);
});

classesRoutes.post("/:id/restore", (req, res, next) => {
    return restoreClasses.handle(req, res, next);
});

classesRoutes.put("/:id", (req, res, next) => {
    return updateClasses.handle(req, res, next);
});

classesRoutes.delete("/:id", (req, res, next) => {
    return deleteClasses.handle(req, res, next);
});

export { classesRoutes };