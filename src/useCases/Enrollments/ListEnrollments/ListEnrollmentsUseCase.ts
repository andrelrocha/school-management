import models from "../../../models";

class ListEnrollmentsUseCase {
    async execute(limit: number, page: number, order: any) {
        try {
            const [field, orderType] = order.split(":");
            
            const enrollments = await models.Enrollments.findAll({
                offset: (page - 1) * limit,
                limit: limit,
                order: [[field, orderType === "1" ? "ASC" : "DESC"]],
                include: [
                    {
                        model: models.People,
                        where: {
                            [models.Sequelize.Op.or]: [
                                { role: "student" },
                                { role: "estudante" }
                            ]
                        }
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

            return enrollments;
        } catch (error) {
            console.error("An error occurred while loading Enrollments's database:", error);
            throw error;
        }
    }
}

export { ListEnrollmentsUseCase };