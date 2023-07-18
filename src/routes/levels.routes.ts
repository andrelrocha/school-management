import { Router } from "express";

import { listLevels } from "../useCases/Levels/ListLevels";

const levelsRoutes = Router();

levelsRoutes.get("/", (request, response, next) => {
    return listLevels.handle(request, response, next);
});

export { levelsRoutes };