import models from "../../../models";

class CreateClassesUseCase {

    async execute(startDate: string, levelId: string, teacherId: string) {
        try {            
            const classAlreadyExists = await models.Classes.findOne({ where: { startDate, teacherId } });
            if (classAlreadyExists) {
                throw new Error("Class already exists");
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