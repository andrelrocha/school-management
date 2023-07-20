import models from "../../../models";

class ListPeopleAllUseCase {
    async execute(limit: number, page: number, order: any) {
        try{
            const [field, orderType] = order.split(":");
            
            const allPeople = await models.People.scope("all").findAll({
                offset: (page - 1) * limit,
                limit: limit,
                order: [[field, orderType === "1" ? "ASC" : "DESC"]]
            });

            return allPeople;
        } catch (error) {
            console.error("An error occurred while loading People's database:", error);
            throw error;
        }}
}

export { ListPeopleAllUseCase };