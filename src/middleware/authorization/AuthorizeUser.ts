import jwt, { Secret } from "jsonwebtoken";

function authorizeUser(req, res, next) {
    const tokenJwt = req.headers.authorization;

    if (!tokenJwt) {
        return res.status(401).json({ message: "Authorization token missing" });
    }

    try {
        const payloadToken = jwt.verify(tokenJwt, process.env.JWT_SECRET as Secret);
        req.user = payloadToken;

        next();
    } catch (err) {
        return res.status(403).json({ message: "Invalid token" });
    }
}

export { authorizeUser };