import { Router } from "express";

import { listPeople } from "../useCases/listPeople";

const peopleRoutes = Router();

peopleRoutes.get("/", (req, res, next) => {
    return listPeople.handle(req, res, next);
});

export { peopleRoutes };