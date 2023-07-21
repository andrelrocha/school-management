import models from "../../../models";

class ListClassesFullUseCase {
    async execute(all: number) {
        try {        
            const totalClasses = await models.Classes.count();

            if (totalClasses == 0) {
                throw new Error("No  classes found.");
            }

            const statusOfClasses = [""]; 
            const classesFull = [""];
            
            const classes = await models.Classes.findAll();

            for (const classItem of classes) {
                const classId = classItem.id;

                const numberOfEnrollments = await models.Enrollments.count({ where: { classId } });

                statusOfClasses.push(`Class with id ${classId} has ${numberOfEnrollments} enrollments.`);

                if (numberOfEnrollments >= 10) {
                    classesFull.push(`Class with id ${classId} is full.`);
                }
            }

            if (all === 1) {
                return { message: "Status of all classes:", statusOfClasses };
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