import { CreateLevelsUseCase } from "./CreateLevelsUseCase";
import { CreateLevelsController } from "./CreateLevelsController";

const createLevelsUseCase = new CreateLevelsUseCase();
const createLevels = new CreateLevelsController(createLevelsUseCase);

export { createLevels };