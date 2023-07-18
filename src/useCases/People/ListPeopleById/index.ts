import { ListPeopleByIdUseCase } from "./ListPeopleByIdUseCase";
import { ListPeopleByIdController } from "./ListPeopleByIdController";

const listPeopleByIdUseCase = new ListPeopleByIdUseCase();
const listPeopleByid = new ListPeopleByIdController(listPeopleByIdUseCase);

export { listPeopleByid };