import express from "express";

import { db, client } from "./db/dbConnect";


db.on("error", console.log.bind(console, "Database connection error!"));
db.once("open", () => console.log("Database connected!"));

const app = express();
app.use(express.json());    

export { app };