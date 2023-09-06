// eslint-disable-next-line @typescript-eslint/no-var-requires
const nodemailer = require("nodemailer");

import { host, port, user, pass } from "../config/mail.json";

const transport = nodemailer.createTransport({
    host,
    port,
    auth: { user, pass }
});

export { transport };