import { DeleteEnrollmentsUseCase } from "./DeleteEnrollmentsUseCase";
import { DeleteEnrollmentsController } from "./DeleteEnrollmentsController";

const deleteEnrollmentsUseCase = new DeleteEnrollmentsUseCase();
const deleteEnrollments = new DeleteEnrollmentsController(deleteEnrollmentsUseCase);

export { deleteEnrollments };