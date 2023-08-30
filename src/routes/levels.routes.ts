import { Router } from "express";

import { createLevels } from "../useCases/Levels/CreateLevels";
import { deleteLevels } from "../useCases/Levels/DeleteLevels";
import { listLevels } from "../useCases/Levels/ListLevels";
import { restoreLevels } from "../useCases/Levels/RestoreLevels";
import { updateLevels } from "../useCases/Levels/UpdateLevels";

const levelsRoutes = Router();

/**
 * @openapi
 * /levels:
 *   get:
 *     tags:
 *       - Levels
 *     summary: List all levels
 *     responses:
 *       '200':
 *         description: Success
 *     content:
 *       application/json:
 *         schema:
 *           $ref: '#/components/schemas/Levels'
 */
levelsRoutes.get("/", (request, response, next) => {
    return listLevels.handle(request, response, next);
});

/**
 * @openapi
 * /levels/{id}:
 *   post:
 *     tags:
 *       - Levels
 *     summary: Create a level
 *     description: Create a new level 
 *     parameters:
 *       - desc_lvl:
 *            in: body
 *            required: true
 *            description: Description to the level to create
 *            schema:
 *                  type: string
 *     responses:
 *       '201':
 *         description: Level created successfully
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Levels'
 */
levelsRoutes.post("/", (request, response, next) => {
    return createLevels.handle(request, response, next);
});

/**
 * @openapi
 * /levels/{id}/restore:
 *   post:
 *     tags:
 *       - Levels
 *     summary: Restore a deleted level
 *     description: Restore a previously deleted level by its ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the level to restore
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Level restored successfully
 */
levelsRoutes.post("/:id/restore", (request, response, next) => {
    return restoreLevels.handle(request, response, next);
});

/**
 * @openapi
 * /levels/{id}:
 *   put:
 *     tags:
 *       - Levels
 *     summary: Update a level
 *     description: Update the details of a level by its ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the level to update
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Level updated successfully
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Levels'
 */
levelsRoutes.put("/:id", (request, response, next) => {
    return updateLevels.handle(request, response, next);
});

/**
 * @openapi
 * /levels/{id}:
 *   delete:
 *     tags:
 *       - Levels
 *     summary: Delete a level
 *     description: Delete a level by its ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the level to delete
 *         required: true
 *     responses:
 *       '204':
 *         description: Level deleted successfully
 */
levelsRoutes.delete("/:id", (request, response, next) => {
    return deleteLevels.handle(request, response, next);
});

export { levelsRoutes };