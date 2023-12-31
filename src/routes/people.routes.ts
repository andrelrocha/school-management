import { Router } from "express";

import { createPeople } from "../useCases/People/CreatePeople";
import { deletePeople } from "../useCases/People/DeletePeople";
import { listPeopleActive } from "../useCases/People/ListPeopleActive";
import { listPeopleAll } from "../useCases/People/ListPeopleAll";
import { listPeopleByid } from "../useCases/People/ListPeopleById";
import { restorePeople } from "../useCases/People/RestorePeople";
import { updatePeople } from "../useCases/People/updatePeople";

import { listPeopleConfirmedEnrollment } from "../useCases/People/ListPeopleConfirmedEnrollment";

import { createEnrollments } from "../useCases/Enrollments/CreateEnrolments";
import { deleteEnrollments } from "../useCases/Enrollments/DeleteEnrollments";
import { listEnrollmentsById } from "../useCases/Enrollments/ListEnrollmentsById";
import { restoreEnrollments } from "../useCases/Enrollments/RestoreEnrollments";
import { updateEnrollment } from "../useCases/Enrollments/UpdateEnrollments";

const peopleRoutes = Router();

/**
 * @openapi
 * /people:
 *   get:
 *     tags:
 *       - People
 *     summary: List all people
 *     responses:
 *       '200':
 *         description: Success
 *     content:
 *       application/json:
 *         schema:
 *           $ref: '#/components/schemas/People'
 */
peopleRoutes.get("/", (req, res, next) => {
    return listPeopleActive.handle(req, res, next);
});

peopleRoutes.get("/all", (req, res, next) => {
    return listPeopleAll.handle(req, res, next);
});

peopleRoutes.get("/:id", (req, res, next) => {
    return listPeopleByid.handle(req, res, next);
});

peopleRoutes.post("/", (req, res, next) => {
    return createPeople.handle(req, res, next);
});

peopleRoutes.post("/:id/restore", (req, res, next) => {
    return restorePeople.handle(req, res, next);
});

/**
 * @openapi
 * /people/{id}:
 *   put:
 *     tags:
 *       - People
 *     summary: Update someone
 *     description: Update someone by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the people to update
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: People updated successfully
 */
peopleRoutes.put("/:id", (req, res, next) => {
    return updatePeople.handle(req, res, next);
});

peopleRoutes.delete("/:id", (req, res, next) => {
    return deletePeople.handle(req, res, next);
});

//////////////////////////////////////////////////////////////////

peopleRoutes.get("/:studentId/enrollments/:enrollmentId", (req, res, next) => {
    return listEnrollmentsById.handle(req, res, next);
});

peopleRoutes.get("/:studentId/enrollments", (req, res, next) => {
    return listPeopleConfirmedEnrollment.handle(req, res, next);
});

peopleRoutes.post("/:studentId/enrollments/", (req, res, next) => {
    return createEnrollments.handle(req, res, next);
});

peopleRoutes.post("/:studentId/enrollments/:enrollmentId/restore", (req, res, next) => {
    return restoreEnrollments.handle(req, res, next);
});

peopleRoutes.put("/:studentId/enrollments/:enrollmentId", (req, res, next) => {
    return updateEnrollment.handle(req, res, next);
});

peopleRoutes.delete("/:studentId/enrollments/:enrollmentId", (req, res, next) => {
    return deleteEnrollments.handle(req, res, next);
});


export { peopleRoutes };