import { ListLevelsUseCase } from "./ListLevelsUseCase";
import { ListLevelsController } from "./ListLevelsController";

const listLevelsUseCase = new ListLevelsUseCase();
const listLevels = new ListLevelsController(listLevelsUseCase);

export { listLevels };