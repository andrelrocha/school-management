import models from "../../../models";

class RestaurePeopleUseCase {
    async execute(id: string) {
        try {
            const person = await models.People.findByPk(id, {
                paranoid: false
            });

            if (!person) {
                throw new Error("Person not found");
            }

            await person.restore();

            return person;
        } catch (error) {
            console.error(error);
            throw new Error(error.message);
        }
        
    }
}

export { RestaurePeopleUseCase };