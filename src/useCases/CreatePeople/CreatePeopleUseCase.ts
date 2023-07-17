import models from "../../models";

interface IPeopleRequest {
    name: string;
    email: string;
    role: string;
}

class CreatePeopleUseCase {

    async execute({ name, email, role }: IPeopleRequest) {
        try {
            const personAlreadyExists = await models.People.findOne({ where: { email } });
            if (personAlreadyExists) throw new Error(`Person with email ${email} already exists in our database`);
            
            const newPerson = await models.People.create({
                name,
                email,
                role
            });

            return newPerson;
        } catch (error) {
            console.error(error);
            
        }
    }
}

export { CreatePeopleUseCase };