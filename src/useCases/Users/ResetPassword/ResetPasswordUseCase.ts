import models from "../../../models";

interface IRequest {
    email: string;
    password: string;
    token: string;
}

class ResetPasswordUseCase {

    async execute(data: IRequest) {
        
    }
}

export { ResetPasswordUseCase };