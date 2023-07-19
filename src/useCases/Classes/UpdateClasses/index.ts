import { UpdateClassesUseCase } from "./UpdateClassesUseCase";
import { UpdateClassesController } from "./UpdateClassesController";

const updateClassesUseCase = new UpdateClassesUseCase();
const updateClasses = new UpdateClassesController(updateClassesUseCase);

export { updateClasses };
