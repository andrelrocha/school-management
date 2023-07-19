import models from "../../../models";

class CreateEnrollmentsUseCase {
    async execute(studentId: string, classId: string, status: string) {
        try {
            const enrollmentAlreadyExists = await models.Enrollments.findOne({
                where: {
                    studentId,
                    classId
                }
            });

            if (enrollmentAlreadyExists) {
                throw new Error("Enrollment already exists");
            }

            if (!studentId || !classId || !status) {
                throw new Error("Missing information needed for enrollment creation");
            }

            const enrollment = await models.Enrollments.create({
                studentId,
                classId,
                status
            });

            return enrollment;
        } catch (error) {
            console.error(error);
            throw new Error(error.message);
        }
    }
}

export { CreateEnrollmentsUseCase };