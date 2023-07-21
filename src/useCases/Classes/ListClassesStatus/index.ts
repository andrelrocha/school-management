import { ListClassesStatusUseCase } from "./ListClassesStatusUseCase";
import { ListClassesController } from "../ListClasses/ListClassesController";

const listClassesStatusUseCase = new ListClassesStatusUseCase();
const listClassesStatus = new ListClassesController(listClassesStatusUseCase);

export { listClassesStatus };