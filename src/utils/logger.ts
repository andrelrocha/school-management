import pino from "pino";
import dayjs from "dayjs";
import prettifier from "pino-pretty"; 

const log = pino({
    base: {
        pid: false,
    },
    timestamp: () => `,"time":"${dayjs().format()}"`,
    prettifier: prettifier 
});

export default log;