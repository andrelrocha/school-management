import { Router } from "express";

import { authenticateUser } from "../useCases/Users/AuthenticateUser";
import { createUser } from "../useCases/Users/CreateUser";
import { forgotPassword } from "../useCases/Users/ForgotPassword";
import { listUsersEmail } from "../useCases/Users/ListUsersEmail";

const usersRoutes = Router();

usersRoutes.get("/", (req, res, next) => listUsersEmail.handle(req, res, next));

usersRoutes.post("/login", (req, res, next) => authenticateUser.handle(req, res, next));

usersRoutes.post("/", (req, res, next) => createUser.handle(req, res, next));

usersRoutes.post("/forgot_password", (req, res, next) => forgotPassword.handle(req, res, next));

export { usersRoutes };