import models from "../../../models";

class ListClassesUseCase {

    async execute(limit: number, page: number, order: any, initialDate: any, finalDate: any) {
        try {
            if (initialDate && !finalDate) {
                const classesByDate = await models.Classes.findAll({
                    where: {
                        startDate: { [models.Sequelize.Op.gte]: initialDate }}
                });
                return classesByDate;
            } else if (!initialDate && finalDate) {
                const classesByDate = await models.Classes.findAll({
                    where: {
                        startDate: { [models.Sequelize.Op.lte]: finalDate }}
                });
                return classesByDate;
            } else if (initialDate && finalDate) {
                const classesByDate = await models.Classes.findAll({
                    where: {
                        startDate: { [models.Sequelize.Op.between]: [initialDate, finalDate] }}  
                });
                return classesByDate;
            }

            const [field, orderType] = order.split(":");

            const classes = await models.Classes.findAll({
                offset: (page - 1) * limit,
                limit: limit,
                order: [[field, orderType === "1" ? "ASC" : "DESC"]]
            });

            return classes;
        } catch (error) {
            console.error("An error occurred while loading Classes's database:", error);
            throw error;
        }
    }
}

export { ListClassesUseCase };