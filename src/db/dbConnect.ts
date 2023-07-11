import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const PG_URI = process.env.PG_URI!;

const connect = PG_URI;

const db = new Pool({
    connectionString: connect,
});

export { db };

/*
npx sequelize-cli model:create --name People --attributes name:string,active:boolean,email:string,role:string
*/