import models from "../../../models";

class DeleteLevelsUseCase {
    async execute(id: string) {
        try {            
            const levelExists = await models.Levels.findByPk(id);

            if(!levelExists) {
                throw new Error("Level does not exists!");
            }
            
            await models.Levels.destroy({ where: { id } });
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

export { DeleteLevelsUseCase };