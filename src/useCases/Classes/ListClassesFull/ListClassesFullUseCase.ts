import models from "../../../models";

class ListClassesFullUseCase {
    async execute() {
        try {        
            const totalClasses = await models.Classes.count();

            if (totalClasses == 0) {
                throw new Error("No  classes found.");
            }

            const classesFull = [""];
            
            const classes = await models.Classes.findAll();

            for (const classItem of classes) {
                const classId = classItem.id;

                const numberOfEnrollments = await models.Enrollments.count({ where: { classId } });

                if (numberOfEnrollments >= 10) {
                    classesFull.push(`Class with id ${classId} is full.`);
                }
            }

            if (classesFull.length > 1) {
                return { message: "Classes full found.", classesFull };
            }

            return { message: "No classes are full." };
        } catch (error) {
            console.error(error);
            throw new Error(error.message);
        }
    }
}

export { ListClassesFullUseCase };