import models from "../../../models";

class RestoreEnrollmentsUseCase {
    async execute(id: string) {
        try {
            const enrollments = await models.Enrollments.findByPk(id, {
                paranoid: false
            });

            if (!enrollments) {
                throw new Error("Enrollments not found");
            }

            await enrollments.restore();

            return enrollments;
        } catch (error) {
            console.error(error);
            throw new Error(error.message);
        }
    }
}

export { RestoreEnrollmentsUseCase };