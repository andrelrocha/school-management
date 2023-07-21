import { ListEnrollmentsByClassUseCase } from "./ListEnrollmentsByClassUseCase";
import { ListEnrollmentsByIdController } from "./ListEnrollmentsByClassController";

const listEnrollmentsByClassUseCase = new ListEnrollmentsByClassUseCase();
const listEnrollmentsByClass = new ListEnrollmentsByIdController(listEnrollmentsByClassUseCase);

export { listEnrollmentsByClass };