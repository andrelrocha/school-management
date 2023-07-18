import { CreateClassesUseCase } from "./CreateClassesUseCase";
import { CreateClassesController } from "./CreateClassesController";

const createClassesUseCase = new CreateClassesUseCase();
const createClasses = new CreateClassesController(createClassesUseCase);

export { createClasses };