import { Pool, Client } from "pg";

const connect = "postgres://andre-oficial:1234321@localhost:5432/recipes-app-db";

const db = new Pool({
    connectionString: connect,
});

const client = new Client({
    connectionString: connect,
});

export { db, client };
