import models from "../../models";

class ListPeopleUseCase {
    async execute() {
        try{
            const allPeople = await models.People.findAll();
            return allPeople;
        } catch (error) {
            console.error("An error occurred while loading People's database:", error);
            throw error;
        }}
}

export { ListPeopleUseCase };