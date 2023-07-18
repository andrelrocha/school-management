import { ListPeopleUseCase } from "./ListPeopleUseCase";
import { ListPeopleController } from "./ListPeopleController";

const listPeopleUseCase = new ListPeopleUseCase();
const listPeople = new ListPeopleController(listPeopleUseCase);

export { listPeople };