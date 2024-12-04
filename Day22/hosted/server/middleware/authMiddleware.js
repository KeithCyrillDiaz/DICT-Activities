const jwt = require('jsonwebtoken');


const authMiddleware = async (req, res, next) => {

    const token = req.headers.authorization?.split(" ")[1];
    if(!token){
        return res.status(401).json({error: "No token provided"});
    }
    try {
        console.log("token: ", token);
        console.log("secret: ", process.env.JWT_SECRET);
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

        req.userId = decodedToken.userId;
        console.log(`decoded: ${JSON.stringify(decodedToken, null, 2)}`)
        next();
    } catch (error) {
        return res.status(401).json({error: "Invalid Token"});
    }
}

module.exports = authMiddleware;