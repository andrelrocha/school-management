import models from "../../models";

class ListClassesUseCase {

    async execute(limit: number, page: number, order: any) {
        try {
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