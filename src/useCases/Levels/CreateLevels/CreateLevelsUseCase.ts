import models from "../../../models";

class CreateLevelsUseCase {

    async execute(description: string) {
        try {
            const desc_lvl = description.toLowerCase();
            
            const levelAlreadyExists = await models.Levels.findOne({ where: { desc_lvl } });
            if (levelAlreadyExists) {
                throw new Error("Level already exists");
            }

            if (!desc_lvl) {
                throw new Error("Missing information needed for level creation");
            }

            const level = await models.Levels.create({ desc_lvl });
            
            return level;
        } catch (error) {
            console.error(error);
            throw new Error(error.message);
        }
        
        
    }
}

export { CreateLevelsUseCase };