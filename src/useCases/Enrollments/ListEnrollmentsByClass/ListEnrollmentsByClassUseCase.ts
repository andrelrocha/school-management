import models from "../../../models";

class ListEnrollmentsByClassUseCase {
    async execute(classId: string) {
        try {
            const { count, rows: enrollments } = await models.Enrollments.findAndCountAll({
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

            return { message: `This class has a total of ${count} enrollments.`, enrollments };
        } catch (error) {
            console.error(error);
            throw new Error(error.message);
        }
    }
}

export { ListEnrollmentsByClassUseCase };