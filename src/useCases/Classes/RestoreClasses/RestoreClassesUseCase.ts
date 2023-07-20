import models from "../../../models";

class RestoreClassesUseCase {
    async execute(id: string) {
        try {
            const classes = await models.Classes.findByPk(id, {
                paranoid: false
            });

            if (!classes) {
                throw new Error("Classes not found");
            }

            await classes.restore();

            return classes;
        } catch (error) {
            console.error(error);
            throw new Error(error.message);
        }
    }
}

export { RestoreClassesUseCase };