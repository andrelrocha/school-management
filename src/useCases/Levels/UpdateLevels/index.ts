import { UpdateLevelsUseCase } from "./UpdateLevelsUseCase";
import { UpdateLevelsController } from "./UpdateLevelsController";

const updateLevelsUseCase = new UpdateLevelsUseCase();
const updateLevels = new UpdateLevelsController(updateLevelsUseCase);

export { updateLevels };