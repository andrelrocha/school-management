import { Router } from "express";

import { classesRoutes } from "./classes.routes";
import { levelsRoutes } from "./levels.routes";
import { peopleRoutes } from "./people.routes";
import { usersRoutes } from "./users.routes";

import { devRoutes } from "./dev.routes";

import { authorizeUser } from "../middleware/authorization/AuthorizeUser";

const router = Router();

router.use((req, res, next) => {
    if (req.path === "/users/login" || req.path === "/users/forgot" || (req.path === "/users" && req.method === "POST")) {
        return next();
    }
    authorizeUser(req, res, next);
});

router.use("/classes", classesRoutes);
router.use("/levels", levelsRoutes);
router.use("/people", peopleRoutes);
router.use("/users", usersRoutes);

router.use("/dev", devRoutes);

export { router };