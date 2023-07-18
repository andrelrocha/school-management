import models from "../../../models";

class ListEnrollmentsByIdUseCase {
    async execute(enrollmentId: string, studentId: string) {
        try {
            const enrollment = await models.Enrollments.findOne({
                where: { 
                    id: Number(enrollmentId),
                    studentId 
                },
                include: [
                    {
                        model: models.People,
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