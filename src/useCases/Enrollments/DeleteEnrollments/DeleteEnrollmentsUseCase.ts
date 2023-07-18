import models from "../../../models";

class DeleteEnrollmentsUseCase {
    async execute(studentId: string, enrollmentId: string) {
        try {
            const enrollment = await models.Enrollments.findOne({
                where: {
                    studentId,
                    id: enrollmentId
                }
            });

            if (!enrollment) {
                throw new Error("Enrollment does not exist");
            }

            await models.Enrollments.destroy({ where: { studentId, id: enrollmentId } });

            return {message: "Enrollment deleted successfully"};
        }
        catch (error) {
            console.error("An error occurred while deleting enrollment's database", error);
            throw error;
        }
    }
}

export { DeleteEnrollmentsUseCase };