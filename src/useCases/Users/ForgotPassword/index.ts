import { ForgotPasswordUseCase } from "./ForgotPasswordUseCase";
import { ForgotPasswordController } from "./ForgotPasswordController";

const forgotPasswordUseCase = new ForgotPasswordUseCase();
const forgotPassword = new ForgotPasswordController(forgotPasswordUseCase);

export { forgotPassword };