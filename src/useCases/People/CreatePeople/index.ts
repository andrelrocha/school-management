import { CreatePeopleUseCase } from "./CreatePeopleUseCase";
import { CreatePeopleController } from "./CreatePeopleController";

const createPeopleUseCase = new CreatePeopleUseCase();
const createPeople = new CreatePeopleController(createPeopleUseCase);

export { createPeople };