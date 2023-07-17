import models from "../../models";

interface IPeopleRequest {
    id: string;
    name: string;
    email: string;
    role: string;
}

class UpdatePeopleUseCase {
    async execute({ id, name, email, role }: IPeopleRequest) {
        try {
            if (!id) throw new Error("Missing id parameter");

            const person = await models.People.findByPk(id);

            if (!person) throw new Error(`Person ${name} does not exist in our database`);

            await models.People.update({
                name,
                email,
                role
            }, { where: { id } });

            return {message: "Person updated successfully"};
        } catch (error) {
            console.error("An error occurred while updating people's database", error);
            throw error;
        }
    }
}

export { UpdatePeopleUseCase };