import express from "express";

import { sequelize } from "./db/dbConnect";
import { router } from "./routes";
import { errorHandle400 } from "./middleware/errors/ErrorHandle400";
import { errorHandle404 } from "./middleware/errors/ErrorHandle404";

const app = express();
app.use(express.json());

sequelize.sync({ force: true });

app.use(router);
app.use(errorHandle400);
app.use(errorHandle404);

export { app };