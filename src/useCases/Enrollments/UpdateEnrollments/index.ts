import { UpdateEnrollmentsUseCase } from "./UpdateEnrollmentsUseCase";
import { UpdateEnrollmentsController } from "./UpdateEnrollmentsController";

const updateEnrollmentsUseCase = new UpdateEnrollmentsUseCase();
const updateEnrollment = new UpdateEnrollmentsController(updateEnrollmentsUseCase);

export { updateEnrollment };