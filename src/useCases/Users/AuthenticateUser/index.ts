import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";
import { AuthenticateUserController } from "./AuthenticateUserController";

const authenticateUserUseCase = new AuthenticateUserUseCase();
const authenticateUser = new AuthenticateUserController(authenticateUserUseCase);

export { authenticateUser };