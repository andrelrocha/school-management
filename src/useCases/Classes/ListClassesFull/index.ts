import { ListClassesFullUseCase } from "./ListClassesFullUseCase";
import { ListClassesController } from "../ListClasses/ListClassesController";

const listClassesFullUseCase = new ListClassesFullUseCase();
const listClassesFull = new ListClassesController(listClassesFullUseCase);

export { listClassesFull };