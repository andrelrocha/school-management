import { RestoreLevelsUseCase } from "./RestoreLevelsUseCase";
import { RestoreLevelsController } from "./RestoreLevelsController";

const restoreLevelsUseCase = new RestoreLevelsUseCase();
const restoreLevels = new RestoreLevelsController(restoreLevelsUseCase);

export { restoreLevels };