import express from "express";

import { db, client } from "./db/dbConnect";

db.on("error", console.log.bind(console, "Database connection error!"));
db.on("connect", () => console.log("Database connected!"));

const app = express();
app.use(express.json());  

app.get("/teste", (req, res) => {
    res.status(200).send({message: "Hello World!"});
});

export { app };