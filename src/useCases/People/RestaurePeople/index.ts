import { RestaurePeopleUseCase } from "./RestaurePeopleUseCase";
import { RestaurePeopleController } from "./RestaurePeopleController";

const restaurePeopleUseCase = new RestaurePeopleUseCase();
const restaurePeople = new RestaurePeopleController(restaurePeopleUseCase);

export { restaurePeople };