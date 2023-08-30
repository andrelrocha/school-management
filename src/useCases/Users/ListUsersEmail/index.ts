import { ListUsersEmail } from "./ListUsersEmailUseCase";
import { ListUsersEmailController } from "./ListUsersEmailController";

const listUsersEmailUseCase = new ListUsersEmail();
const listUsersEmail = new ListUsersEmailController(listUsersEmailUseCase);

export { listUsersEmail };