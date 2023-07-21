import models from "../../../models";

class ListEnrollmentsByClassUseCase {
    async execute(classId: string) {
        try {
            const enrollments = await models.Enrollments.findAll({
                where: { classId },
                include: [
                    {
                        model: models.People,
                    },
                ],
            });

            if (!enrollments) {
                throw new Error("No enrollments found in this class.");
            }

            return enrollments;
        } catch (error) {
            console.error(error);
            throw new Error(error.message);
        }
    }
}

export { ListEnrollmentsByClassUseCase };