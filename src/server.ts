import { app, port } from "./app";

import { startMetricsServer, restResponseTime } from "./utils/metrics";
import { Response, Request } from "express";
import responseTime from "response-time";

app.use(responseTime((req: Request, res: Response, time: number) => {
    if (req?.route?.path === "/metrics") {
        restResponseTime.observe({ 
            method: req.method, 
            route: req.route.path, 
            status_code: res.statusCode }, time * 1000);
    }
}));

app.listen(port, () => { 
    console.log("SERVER UP!");
    startMetricsServer();
});