import models from "../../../models";

class ListPeopleByIdUseCase {

    async execute(id: string) {
        try {
            const person = await models.People.findByPk(id, {
                paranoid: false
            });
    
            if (!person) {
                throw new Error("Person not found");
            }
            return person;
        } catch (error) {
            console.error(error);
            throw new Error(error.message);
        }
        
    }

}

export { ListPeopleByIdUseCase };