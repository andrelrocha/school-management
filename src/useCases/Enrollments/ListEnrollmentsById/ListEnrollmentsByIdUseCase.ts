import models from "../../../models";

class ListEnrollmentsByIdUseCase {
    async execute(enrollmentId: string, studentId: string) {
        try {
            const enrollment = await models.Enrollments.findOne({
                where: { 
                    id: enrollmentId,
                    studentId 
                },
                paranoid: false,
                include: [
                    {
                        model: models.People.scope("all"),
                        paranoid: false,
                    },
                    {
                        model: models.Classes,
                        include: [
                            {
                                model: models.Levels,
                            }
                        ]
                    }
                ]
            });

            if (!enrollment) {
                throw new Error("Enrollment not found");
            }

            return enrollment;
        } catch (error) {
            console.error(error);
            throw new Error(error.message);
        }
    }
}

export { ListEnrollmentsByIdUseCase };