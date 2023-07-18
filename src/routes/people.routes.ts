import { Router } from "express";

import { createPeople } from "../useCases/People/CreatePeople";
import { deletePeople } from "../useCases/People/DeletePeople";
import { listPeople } from "../useCases/People/listPeople";
import { listPeopleByid } from "../useCases/People/ListPeopleById";
import { updatePeople } from "../useCases/People/updatePeople";


const peopleRoutes = Router();

peopleRoutes.get("/", (req, res, next) => {
    return listPeople.handle(req, res, next);
});

peopleRoutes.get("/:id", (req, res, next) => {
    return listPeopleByid.handle(req, res, next);
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