import models from "../../../models";

class DeletePeopleUseCase {
    async execute(id: string) {
        const transaction = await models.sequelize.transaction();
        try {
            const person = await models.People.findByPk(id, { paranoid: false });
            if (!person) throw new Error(`Person with id ${id} does not exist in our database`);

            models.sequelize.transaction(async transaction => {
                await person.destroy();
                await person.update(
                    { active: "false" },
                    { transaction }
                );

                await models.Enrollments.update(
                    { status: "canceled" },
                    { where: { studentId: id }, transaction }
                );
            });

            await transaction.commit();

        } catch (error) {
            await transaction.rollback();
            console.error(error);
            throw new Error(error.message);
        }
    }
}

export { DeletePeopleUseCase };