import express from "express";
import client from "prom-client";

const app = express();

const restResponseTime = new client.Histogram({
    name: "rest_response_time_seconds",
    help: "Response time of the REST API endpoints in seconds",
    labelNames: ["method", "route", "status_code"]
});

const databaseQueryResponseTime = new client.Histogram({
    name: "database_query_response_time_seconds",
    help: "Response time of the database queries in seconds",
    labelNames: ["operation", "success"]
});

function startMetricsServer() {

    const collectDefaultMetrics = client.collectDefaultMetrics;

    collectDefaultMetrics();

    app.get("/metrics", async (req, res) => {
        res.set("Content-Type", client.register.contentType);

        return res.send(await client.register.metrics());
    });

    app.listen(9000, () => {
        console.log("Metrics server listening in http://localhost:9000/metrics");
    });
}

export { databaseQueryResponseTime, restResponseTime, startMetricsServer };