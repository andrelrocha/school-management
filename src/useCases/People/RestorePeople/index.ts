import { RestorePeopleUseCase } from "./RestorePeopleUseCase";
import { RestorePeopleController } from "./RestorePeopleController";

const restorePeopleUseCase = new RestorePeopleUseCase();
const restorePeople = new RestorePeopleController(restorePeopleUseCase);

export { restorePeople };