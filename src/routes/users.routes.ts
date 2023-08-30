import { Router } from "express";

import { authenticateUser } from "../useCases/Users/AuthenticateUser";
import { createUser } from "../useCases/Users/CreateUser";

const usersRoutes = Router();

usersRoutes.post("/login", (req, res, next) => authenticateUser.handle(req, res, next));

usersRoutes.post("/", (req, res, next) => createUser.handle(req, res, next));

export { usersRoutes };