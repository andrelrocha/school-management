import { ResetPasswordUseCase } from "./ResetPasswordUseCase";
import { ResetPasswordController } from "./ResetPasswordController";

const resetPasswordUseCase = new ResetPasswordUseCase();
const resetPassword = new ResetPasswordController(resetPasswordUseCase);

export { resetPassword };