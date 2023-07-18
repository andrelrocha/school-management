import models from "../../../models";

class UpdateEnrollmentsUseCase {
    async execute(status: string, enrollmentId: string, studentId: string) {
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

            await models.Enrollments.update({
                status,
            }, { where: { studentId, id: enrollmentId } });

            return {message: "Enrollment updated successfully"};
        }
        catch (error) {
            console.error("An error occurred while updating enrollment's database", error);
            throw error;
        }
    }
}

export { UpdateEnrollmentsUseCase };