import models from "../../../models";

class DeleteClassesUseCase {
    async execute(id: string) {
        try {
            const classExists = models.Classes.findByPk(id);

            if (!classExists) {
                throw new Error("Class does not exists!");
            }
            
            await models.Classes.destroy({
                where: { id }
            });
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

export { DeleteClassesUseCase };