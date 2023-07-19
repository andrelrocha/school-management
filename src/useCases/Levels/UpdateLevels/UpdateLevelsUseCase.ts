import models from "../../../models";

class UpdateLevelsUseCase {
    async execute(desc_lvl: string, id: string) {
        try {
            const level = await models.Levels.findByPk(id);
    
            if (!level) {
                throw new Error("Level does not exists!");
            }

            if (!desc_lvl) {
                throw new Error("No description was provided for updating the requested level");
            }

            await models.Levels.update({ desc_lvl }, { where: { id } });
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

export { UpdateLevelsUseCase };