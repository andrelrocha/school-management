import db from "../../models";


class ListPeopleUseCase {
    async execute(limit: number, page: number, order: any) {
        try{
            const peopleModel = db.People;

            const [field, orderType] = order.split(":");
            const allPeople = await peopleModel.findAll({
                offset: (page - 1) * limit,
                limit,
                order: [[field, orderType === "1" ? "ASC" : "DESC"]],
            });

            return allPeople;
        } catch (error) {
            console.error("An error occurred while loading People's database:", error);
            throw error;
        }}
}

export { ListPeopleUseCase };