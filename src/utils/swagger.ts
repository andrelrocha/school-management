import { Express, Request, Response } from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { version } from "../../package.json";
import log from "./logger";

const options: swaggerJSDoc.Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API for a School Management System",
            version,
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
        }, 
        security: [
            {
                bearerAuth: [],
            },
        ],
    },
    apis: ["src/routes/*.ts", "src/models/*.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

function swaggerDocs(app: Express, port: number) {
    //Swagger page
    app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));    

    //Docs in JSON format
    app.get("/docs.json", (req: Request, res: Response) => {
        res.setHeader("Content-Type", "application/json");
        res.send(swaggerSpec);
    });

    app.get("/terms", (req: Request, res: Response) => {
        return res.json({
            message: "You must agree to the terms of service before using this API.",
        });
    });

    log.info(`Swagger docs available at http://localhost:${port}/docs`);
}

export default swaggerDocs;