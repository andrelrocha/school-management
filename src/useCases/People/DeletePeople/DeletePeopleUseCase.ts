import models from "../../../models";

class DeletePeopleUseCase {
    async execute(id: string) {
        const transaction = await models.sequelize.transaction();
        try {
            
            const idFound = await models.People.findByPk(id, { paranoid: false });
            if (!idFound) throw new Error(`Person with id ${id} does not exist in our database`);

            await models.People.destroy({ where: { id } });

            await models.Enrollments.update(
                { status: "canceled" },
                { where: { studentId: id }, transaction }
            );
            await transaction.commit();

        } catch (error) {
            await transaction.rollback();
            console.error(error);
            throw new Error(error.message);
        }
    }
}

export { DeletePeopleUseCase };