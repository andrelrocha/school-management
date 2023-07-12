import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const PG_URI = process.env.PG_URI!;

const connect = PG_URI;

const sequelize = new Sequelize(connect, {
    logging: false,
});

async function checkDatabaseConnection() {
    try {
        await sequelize.authenticate();
        await sequelize.query("SELECT 1;");
        console.log("Database connection OK!");
    } catch (error) {
        console.error("Error connecting to the database: ", error);
    }
}
checkDatabaseConnection();

export { sequelize };