import { CreateEnrollmentsUseCase } from "./CreateEnrollmentsUseCase";
import { CreateEnrollmentsController } from "./CreateEnrollmentsController";

const createEnrollmentsUseCase = new CreateEnrollmentsUseCase();
const createEnrollments = new CreateEnrollmentsController(createEnrollmentsUseCase);

export { createEnrollments };