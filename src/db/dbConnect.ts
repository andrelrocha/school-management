import { Pool, Client } from "pg";
import dotenv from "dotenv";

dotenv.config();

const PG_URI = process.env.PG_URI!;

const connect = PG_URI;

const db = new Pool({
    connectionString: connect,
});

const client = new Client({
    connectionString: connect,
});

export { db, client };
