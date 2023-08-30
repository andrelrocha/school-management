import users from "../../models/users";

interface IRequest {
    name: string;
    email: string;
    password: string;
}

class CreateUserUseCase({ name, email, password }: IRequest) {
    try {
        if (!name || !password) {
            throw new Error("Missing required fields");
        }

        const user = await users.findone({ email });
    } catch (err) {
        
    }
}

export { CreateUserUseCase };