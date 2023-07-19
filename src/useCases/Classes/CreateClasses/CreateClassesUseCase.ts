import models from "../../../models";

class CreateClassesUseCase {

    async execute(startDate: string, levelId: string, teacherId: string) {
        try {            
            const classAlreadyExists = await models.Classes.findOne({ where: { levelId, teacherId } });
            if (classAlreadyExists) {
                throw new Error("Class already exists");
            }

            if (!startDate || !levelId || !teacherId) {
                throw new Error("Missing information needed for class creation");
            }

            const classCreated = await models.Classes.create({ startDate, levelId, teacherId });
            
            return classCreated;
        } catch (error) {
            console.error(error);
            throw new Error(error.message);
        }
    }
}

export { CreateClassesUseCase };