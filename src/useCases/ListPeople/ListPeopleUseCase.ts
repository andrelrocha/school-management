import models from "../../models";

class ListPeopleUseCase {
    async execute(limit: number, page: number, order: any) {
        try{
            const [field, orderType] = order.split(":");
            
            const people = await models.People.findAll({
                offset: (page - 1) * limit,
                limit: limit,
                order: [[field, orderType]]
            });

            return people;
        } catch (error) {
            console.error("An error occurred while loading People's database:", error);
            throw error;
        }}
}

export { ListPeopleUseCase };