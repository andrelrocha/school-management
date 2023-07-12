import express from "express";

import { sequelize } from "./db/dbConnect";
import { router } from "./routes";
import { errorHandle400 } from "./middleware/errors/ErrorHandle400";
import { errorHandle404 } from "./middleware/errors/ErrorHandle404";

sequelize.sync({ force: true });

const app = express();
app.use(express.json());  

app.use(router);
app.use(errorHandle400);
app.use(errorHandle404);

app.get("/teste", (req, res) => {
    res.status(200).send({message: "Hello World!"});
});

export { app };