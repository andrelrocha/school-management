import models from "../../../models";

class RestoreLevelsUseCase {
    async execute(id: string) {
        try {
            const level = await models.Levels.findByPk(id, {
                paranoid: false
            });

            if (!level) {
                throw new Error("Level not found");
            }

            await level.restore();

            return level;
        } catch (error) {
            console.error(error);
            throw new Error(error.message);
        }
    }
}

export { RestoreLevelsUseCase };