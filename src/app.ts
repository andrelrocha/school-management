import express from "express";

import { db } from "./db/dbConnect";
import { errorHandle400 } from "./middleware/errors/ErrorHandle400";
import { errorHandle404 } from "./middleware/errors/ErrorHandle404";


db.on("error", console.log.bind(console, "Database connection error!"));
db.on("connect", () => console.log("Database connected!"));

const app = express();
app.use(express.json());  

app.use(errorHandle400);
app.use(errorHandle404);

app.get("/teste", (req, res) => {
    res.status(200).send({message: "Hello World!"});
});

export { app };