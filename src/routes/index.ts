import { Router } from "express";

import { classesRoutes } from "./classes.routes";
import { peopleRoutes } from "./people.routes";

const router = Router();

router.use("/people", peopleRoutes);
router.use("/classes", classesRoutes);

export { router };