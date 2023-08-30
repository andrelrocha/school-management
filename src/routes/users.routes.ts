import { Router } from "express";

import { authenticateUser } from "../useCases/Users/AuthenticateUser";

const usersRoutes = Router();

usersRoutes.post("/login", (req, res, next) => authenticateUser.handle(req, res, next));