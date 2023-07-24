import models from "../../../models";

class RestorePeopleUseCase {
    async execute(id: string) {
        const transaction = await models.sequelize.transaction();
        try {
            const person = await models.People.findByPk(id, {
                paranoid: false
            });

            if (!person) {
                throw new Error("Person not found");
            }

            await person.restore();

            await person.update(
                { active: "true" },
            );

            await models.Enrollments.update(
                { status: "active" },
                { where: { studentId: id }, transaction }
            );
            await transaction.commit();

            return person;
        } catch (error) {
            await transaction.rollback();
            console.error(error);
            throw new Error(error.message);
        }
        
    }
}

export { RestorePeopleUseCase };