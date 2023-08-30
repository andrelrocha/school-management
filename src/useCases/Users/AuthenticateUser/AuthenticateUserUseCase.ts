import models from "../../../models";
import { scryptSync, timingSafeEqual } from "crypto";

interface IRequestLogin {
    email: string;
    password: string;
}

class AuthenticateUserUseCase {
    async execute({ email, password }: IRequestLogin) {
        try {
            if (!email || !password) {
                throw new Error("You must complete all fields for valid credentials");
            }

            const user = await models.Users.findOne({ where: { email } });

            if (!user) {
                throw new Error("Invalid credentials. No user found with the provided username");
            }

            const testHash = scryptSync(password, user.salt, 64);
            const realHash = Buffer.from(user.password, "hex");

            // Importante usar essa comparação de buffer para evitar que invasores descubram informações sensíveis
            const userAuthenticated = timingSafeEqual(testHash, realHash);

            return userAuthenticated;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
}

export { AuthenticateUserUseCase };
