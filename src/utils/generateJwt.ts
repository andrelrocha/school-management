import jwt from "jsonwebtoken";

function generateJwt(email: string) {    
    const payload = { email };
    const tokenJwt = jwt.sign( payload, process.env.JWT_SECRET, {
        expiresIn: "3 days"
    });

    return tokenJwt;
}

export { generateJwt };