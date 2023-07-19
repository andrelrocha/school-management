import { Router } from "express";

import { createLevels } from "../useCases/Levels/CreateLevels";
import { deleteLevels } from "../useCases/Levels/DeleteLevels";
import { listLevels } from "../useCases/Levels/ListLevels";
import { updateLevels } from "../useCases/Levels/UpdateLevels";

const levelsRoutes = Router();

levelsRoutes.get("/", (request, response, next) => {
    return listLevels.handle(request, response, next);
});

levelsRoutes.post("/", (request, response, next) => {
    return createLevels.handle(request, response, next);
});

levelsRoutes.put("/:id", (request, response, next) => {
    return updateLevels.handle(request, response, next);
});

levelsRoutes.delete("/:id", (request, response, next) => {
    return deleteLevels.handle(request, response, next);
});

export { levelsRoutes };