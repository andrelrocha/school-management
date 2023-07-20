import { RestoreEnrollmentsUseCase } from "./RestoreEnrollmentsUseCase";
import { RestoreEnrollmentsController } from "./RestoreEnrollmentsController";

const restoreEnrollmentsUseCase = new RestoreEnrollmentsUseCase();
const restoreEnrollments = new RestoreEnrollmentsController(restoreEnrollmentsUseCase);

export { restoreEnrollments };