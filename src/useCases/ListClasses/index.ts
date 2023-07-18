import { ListClassesUseCase } from "./ListClassesUseCase";
import { ListClassesController } from "./ListClassesController";

const listClassesUseCase = new ListClassesUseCase();
const listClasses = new ListClassesController(listClassesUseCase);

export { listClasses };