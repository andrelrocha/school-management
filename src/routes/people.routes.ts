import { Router } from "express";

import { createPeople } from "../useCases/CreatePeople";
import { listPeople } from "../useCases/listPeople";


const peopleRoutes = Router();

peopleRoutes.get("/", (req, res, next) => {
    return listPeople.handle(req, res, next);
});

peopleRoutes.post("/", (req, res, next) => {
    return createPeople.handle(req, res, next);
});

export { peopleRoutes };