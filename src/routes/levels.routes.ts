import { Router } from "express";

import { createLevels } from "../useCases/Levels/CreateLevels";
import { listLevels } from "../useCases/Levels/ListLevels";

const levelsRoutes = Router();

levelsRoutes.get("/", (request, response, next) => {
    return listLevels.handle(request, response, next);
});

levelsRoutes.post("/", (request, response, next) => {
    return createLevels.handle(request, response, next);
});

export { levelsRoutes };