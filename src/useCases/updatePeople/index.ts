import { UpdatePeopleUseCase } from "./UpdatePeopleUseCase";
import { UpdatePeopleController } from "./UpdatePeopleController";

const updatePeopleUseCase = new UpdatePeopleUseCase();
const updatePeople = new UpdatePeopleController(updatePeopleUseCase);

export { updatePeople };