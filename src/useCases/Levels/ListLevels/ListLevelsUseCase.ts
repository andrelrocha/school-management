import models from "../../../models";

class ListLevelsUseCase {
    async execute(limit: number, page: number, order: any) {
        try {
            const [field, orderType] = order.split(":");

            const levels = await models.Levels.findAll({
                offset: (page - 1) * limit,
                limit: limit,
                order: [[field, orderType === "1" ? "ASC" : "DESC"]]
            });

            return levels;
        } catch (error) {
            console.error("An error occurred while loading Levels's database:", error);
            throw error;
        }
    }
}

export { ListLevelsUseCase };