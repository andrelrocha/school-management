import models from "../../../models";

class ListPeopleUseCase {
    async execute(limit: number, page: number, order: any) {
        try{
            const [field, orderType] = order.split(":");
            
            //default scope is already on use to filter only active people
            const peopleActive = await models.People.findAll({
                offset: (page - 1) * limit,
                limit: limit,
                order: [[field, orderType === "1" ? "ASC" : "DESC"]]
            });

            return peopleActive;
        } catch (error) {
            console.error("An error occurred while loading People's database:", error);
            throw error;
        }}
}

export { ListPeopleUseCase };