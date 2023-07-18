import { Router } from "express";

import { listEnrollments } from "../useCases/Enrollments/ListEnrollments";

const devRoutes = Router();

devRoutes.get("/enrollments", (req, res, next) => {
    return listEnrollments.handle(req, res, next);
});

export { devRoutes };