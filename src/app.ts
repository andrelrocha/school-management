import express from "express";

import { db } from "./db/dbConnect";

db.on("error", console.log.bind(console, "Database connection error!"));
db.connect((err, client, release) => {
    if (err) {
        console.error("Error connecting to the database:", err);
        return;
    }
  
    console.log("Database connected!");
  
    release(); // Liberando a conexão de volta para o pool
});

const app = express();
app.use(express.json());  

app.get("/teste", (req, res) => {
    res.status(200).send({message: "Hello World!"});
});

export { app };