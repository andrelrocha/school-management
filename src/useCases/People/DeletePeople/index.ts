import { DeletePeopleUseCase } from "./DeletePeopleUseCase";
import { DeletePeopleController } from "./DeletePeopleController";

const deletePeopleUseCase = new DeletePeopleUseCase();
const deletePeople = new DeletePeopleController(deletePeopleUseCase);

export { deletePeople};