import { DeleteLevelsUseCase } from "./DeleteLevelsUseCase";
import { DeleteLevelsController } from "./DeleteLevelsController";

const deleteLevelsUseCase = new DeleteLevelsUseCase();
const deleteLevels = new DeleteLevelsController(deleteLevelsUseCase);

export { deleteLevels };