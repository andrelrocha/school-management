import models from "../../../models";
import { createHashSaltPassword } from "../../../utils/createHashSaltPassword";

interface IRequest {
    email: string;
    password: string;
    token: string;
}

class ResetPasswordUseCase {

    async execute({ email, password, token }: IRequest) {
        try {
            const user = await models.Users.findOne({ where: { email } });
            const now = new Date();

            if (!user) {
                throw new Error("User not found");
            }
            if (token !== user.passwordResetToken) {
                throw new Error("Invalid token for reset password process");
            }
            if (now > user.passwordResetExpires) {
                throw new Error("Token expired, generate a new one");
            }

            const { hashedPassword, salt } = createHashSaltPassword(password);

            await user.update({
                password: hashedPassword,
                salt,
                passwordResetToken: null,
                passwordResetExpires: null
            });

            const userWithoutPassword = {
                id: user.id,
                name: user.name,
                email: user.email,
                updatedAt: user.updatedAt,
                createdAt: user.createdAt,
            };

            return userWithoutPassword;

        } catch (err) {
            console.error("Error while fetching user in db to reset password process", err);
            throw new Error(err.message);
        }
    }
}

export { ResetPasswordUseCase };