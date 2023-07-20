import { ListPeopleAllUseCase } from "./ListPeopleAllUseCase";
import { ListPeopleAllController } from "./ListPeopleAllController";

const listPeopleAllUseCase = new ListPeopleAllUseCase();
const listPeopleAll = new ListPeopleAllController(listPeopleAllUseCase);

export { listPeopleAll };