import { ListPeopleConfirmedEnrollmentUseCase } from "./ListPeopleConfirmedEnrollmentUseCase";
import { ListPeopleConfirmedEnrollmentController } from "./ListPeopleConfirmedEnrollmentController";

const listPeopleConfirmedEnrollmentUseCase = new ListPeopleConfirmedEnrollmentUseCase();
const listPeopleConfirmedEnrollment = new ListPeopleConfirmedEnrollmentController(listPeopleConfirmedEnrollmentUseCase);

export { listPeopleConfirmedEnrollment };