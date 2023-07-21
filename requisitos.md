#Project Requirements

The client would not like important system records, such as People, to be permanently deleted from the database.
- OK!

To make the interface cleaner, the client would like only active users to be displayed by default in the People list.
- OK!

Some form validation failures have been noticed on the front-end, resulting in invalid email data in the database. It is desirable for this validation not to be the sole responsibility of the front-end.
- OK!

It is important to be able to quickly query all confirmed enrollments related to student X.
- OK!

The client would like to be able to query open classes within a date range to avoid receiving unnecessary information (such as old classes).
--const { initialDate, finalDate }  - where: { startDate: { [Op.gt]: initialDate, [Op.lt]: finalDate }, },

The client wants to be able to query enrollments by class and know which ones are full in order to better organize enrollments.
--

Once a student's registration is deactivated, the client would like all enrollments related to that student to automatically be marked as "canceled."
-- by the time it happens the deactivation, query models.Enrollments.update({{ status: "canceled"}, { where: { studentId: id }}})