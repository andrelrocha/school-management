import { Router } from "express";

import { classesRoutes } from "./classes.routes";
import { levelsRoutes } from "./levels.routes";
import { peopleRoutes } from "./people.routes";

const router = Router();

router.use("/classes", classesRoutes);
router.use("/levels", levelsRoutes);
router.use("/people", peopleRoutes);

export { router };