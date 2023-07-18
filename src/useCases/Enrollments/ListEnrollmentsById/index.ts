import { ListEnrollmentsByIdUseCase } from "./ListEnrollmentsByIdUseCase";
import { ListEnrollmentsByIdController } from "./ListEnrollmentsByIdController";

const listEnrollmentsByIdUseCase = new ListEnrollmentsByIdUseCase();
const listEnrollmentsById = new ListEnrollmentsByIdController(listEnrollmentsByIdUseCase);

export { listEnrollmentsById };