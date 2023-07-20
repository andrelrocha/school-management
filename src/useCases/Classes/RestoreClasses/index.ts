import { RestoreClassesUseCase } from "./RestoreClassesUseCase";
import { RestoreClassesController } from "./RestoreClassesController";

const restoreClassesUseCase = new RestoreClassesUseCase();
const restoreClasses = new RestoreClassesController(restoreClassesUseCase);

export { restoreClasses };