import models from "../../models";
import { createHashSaltPassword } from "../../utils/createHashSaltPassword";

interface IRequest {
    name: string;
    email: string;
    password: string;
}

class CreateUserUseCase {
    async execute({ name, email, password }: IRequest) {
        try {
            if (!email || !password) {
                throw new Error("Missing required fields");
            }

            const user = await models.Users.findOne({ where: { email } });

            if (user) {
                throw new Error("User already exists");
            }

            const { hashedPassword, salt } = createHashSaltPassword(password);

            await models.Users.create({
                name,
                email,
                password: hashedPassword,
                salt,
            });

            console.log("User created successfully");
            return true;
        } catch (error) {
            console.error("Error creating user:", error);
            return false;
        }
    }
}

export { CreateUserUseCase };
