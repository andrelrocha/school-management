import models from "../../../models";

class ListPeopleConfirmedEnrollmentUseCase {
    async execute(id: string) {
        try {
            const people = await models.People.findOne({
                where: {
                    id
                },
            });

            const enrollments = await people.getConfirmedEnrollments();
      
            return enrollments;
        } catch (error) {
            console.error(error);
            throw new Error("Error while listing people with confirmed enrollment");
        }
    }
}

export { ListPeopleConfirmedEnrollmentUseCase };