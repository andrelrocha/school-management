import express from "express";
import dotenv from "dotenv";

import { sequelize } from "./db/dbConnect";
import { router } from "./routes";
import { errorHandle400 } from "./middleware/errors/ErrorHandle400";
import { errorHandle404 } from "./middleware/errors/ErrorHandle404";
import { errorHandlePagination } from "./middleware/errors/ErrorHandlePagination";
import swaggerDocs from "./utils/swagger";

dotenv.config();

const app = express();
app.use(express.json());  

const port = 3000;
swaggerDocs(app, port);

app.use(router);
app.use(errorHandlePagination);
app.use(errorHandle400);
app.use(errorHandle404);

export { app, port };