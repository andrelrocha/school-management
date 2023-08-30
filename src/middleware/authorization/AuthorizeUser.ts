import jwt from "jsonwebtoken";

function authorizeUser(req, res, next) {
    const tokenJwt = req.headers.authorization;

    if (!tokenJwt) {
        return res.status(401).json({ message: "Authorization token missing" });
    }

    try {
        const payloadToken = jwt.verify(tokenJwt, process.env.JWT_SECRET);
        req.user = payloadToken;

        next();
    } catch (err) {
        return res.status(403).json({ message: "Invalid token" });
    }
}

export { authorizeUser };

//DEVE AINDA CONFERIR SE PRECISA SER CHAMADO
//DEVE SER APLICADO EM TODAS AS ROTAS, MENOS NA DE LOGIN E DE CRIAÇÃO DE USUÁRIO