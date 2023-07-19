import models from "../../../models";

class UpdateClassesUseCase {
    async execute(id: string, startDate: string) {
        try {
            const classExists = await models.Classes.findByPk(id);

            if (!classExists) {
                throw new Error("Class does not exists!");
            }

            if (!startDate) {
                throw new Error("No start date was provided for updating the requested class");
            }

            await models.Classes.update({ startDate }, { where: { id } }); 
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

export { UpdateClassesUseCase };