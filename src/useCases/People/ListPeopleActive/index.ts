import { ListPeopleUseCase } from "./ListPeopleActiveUseCase";
import { ListPeopleController } from "./ListPeopleActiveController";

const listPeopleUseCase = new ListPeopleUseCase();
const listPeopleActive = new ListPeopleController(listPeopleUseCase);

export { listPeopleActive };