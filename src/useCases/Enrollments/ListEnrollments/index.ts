import { ListEnrollmentsUseCase } from "./ListEnrollmentsUseCase";
import { ListEnrollmentsController } from "./ListEnrollmentsController";

const listEnrollmentsUseCase = new ListEnrollmentsUseCase();
const listEnrollments = new ListEnrollmentsController(listEnrollmentsUseCase);

export { listEnrollments };