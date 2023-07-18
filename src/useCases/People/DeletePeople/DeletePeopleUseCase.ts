import models from "../../../models";

class DeletePeopleUseCase {
    async execute(id: string) {
        try {
            const idFound = await models.People.findByPk(id);
            if (!idFound) throw new Error(`Person with id ${id} does not exist in our database`);

            await models.People.destroy({ where: { id } });

        } catch (error) {
            console.error(error);
            throw new Error(error.message);
        }
    }
}

export { DeletePeopleUseCase };