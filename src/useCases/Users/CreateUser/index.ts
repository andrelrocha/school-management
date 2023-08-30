import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";

const createUserUseCase = new CreateUserUseCase();
const createUser = new CreateUserController(createUserUseCase);

export { createUser };