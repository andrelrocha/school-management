import models from "../../../models";

class ListClassesStatusUseCase {
    async execute() {
        try {        
            const totalClasses = await models.Classes.count();

            if (totalClasses == 0) {
                throw new Error("No  classes found.");
            }

            const statusOfClasses = [""]; 
            
            const classes = await models.Classes.findAll();

            for (const classItem of classes) {
                const classId = classItem.id;

                const numberOfEnrollments = await models.Enrollments.count({ where: { classId } });

                statusOfClasses.push(`Class with id ${classId} has ${numberOfEnrollments} enrollments.`);   
            }

            return { message: "Status of all classes:", statusOfClasses };
        } catch (error) {
            console.error(error);
            throw new Error(error.message);
        }
    }
}

export { ListClassesStatusUseCase };