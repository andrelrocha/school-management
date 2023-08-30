import models from "../../../models";

class ListUsersEmail {
    async execute(limit: number, page: number, order: any) {
        try{
            const [field, orderType] = order.split(":");
            
            const allUsers = await models.Users.findAll({
                offset: (page - 1) * limit,
                limit: limit,
                order: [[field, orderType === "1" ? "ASC" : "DESC"]],
                attributes: ["email"]
            });

            return allUsers;
        } catch (error) {
            console.error("An error occurred while loading User's database:", error);
            throw error;
        }}
}

export { ListUsersEmail };