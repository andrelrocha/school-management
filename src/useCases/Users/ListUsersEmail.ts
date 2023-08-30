import models from "../../models";

class ListUsersEmail {
    async execute() {
        try {
            const users = await models.User.findAll({
                attributes: ["email"]
            });
    
            return users;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

export { ListUsersEmail };