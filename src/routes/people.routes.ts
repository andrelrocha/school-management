import { Router } from "express";

import { createPeople } from "../useCases/CreatePeople";
import { deletePeople } from "../useCases/DeletePeople";
import { listPeople } from "../useCases/listPeople";
import { updatePeople } from "../useCases/updatePeople";


const peopleRoutes = Router();

peopleRoutes.get("/", (req, res, next) => {
    return listPeople.handle(req, res, next);
});

peopleRoutes.post("/", (req, res, next) => {
    return createPeople.handle(req, res, next);
});

peopleRoutes.put("/:id", (req, res, next) => {
    return updatePeople.handle(req, res, next);
});

peopleRoutes.delete("/:id", (req, res, next) => {
    return deletePeople.handle(req, res, next);
});

export { peopleRoutes };