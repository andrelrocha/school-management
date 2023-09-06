import models from "../../../models";
import { transport } from "../../../utils/mailer";

import crypto from "crypto";

class ForgotPasswordUseCase {
    async execute(email: string): Promise<void> {
        try {
            if (!email) {
                throw new Error("Email is required for forgot password process");
            }
    
            const user = await models.Users.findOne({ where: { email } });

            if (!user) {
                throw new Error("User not found");
            }
    
            const token = crypto.randomBytes(20).toString("hex");
            const now = new Date();
            now.setHours(now.getHours() + 1);
    
            await user.update({
                passwordResetToken: token,
                passwordResetExpires: now
            });
    
            await transport.sendMail({
                to: email,
                from: "andrerocha0911@gmail.com",
                subject: "Forgot password",
                html: `<p> Have you forgotten your password? No problem, use the following token: ${token} </p>`
            }, (err) => {
                if (err) {
                    console.error("Error while sending email to forgot password process", err);
                    throw new Error(err.message);
                }
            });


        } catch (err) {
            console.error("Error while fetching user in db to forget password process", err);
            throw new Error(err.message);
        }
    }
}

export { ForgotPasswordUseCase };