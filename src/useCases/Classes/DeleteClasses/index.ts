import { DeleteClassesUseCase } from "./DeleteClassesUseCase";
import { DeleteClassesController } from "./DeleteClassesController";

const deleteClassesUseCase = new DeleteClassesUseCase();
const deleteClasses = new DeleteClassesController(deleteClassesUseCase);

export { deleteClasses };