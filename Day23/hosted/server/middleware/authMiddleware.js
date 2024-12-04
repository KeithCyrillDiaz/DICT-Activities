const jwt = require('jsonwebtoken');


const authMiddleware = async (req, res, next) => {

    const token = req.headers.authorization?.split(" ")[1];
    if(!token){
        return res.status(401).json({error: "No token provided"});
    }
    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        console.log(`decoded: ${JSON.stringify(decodedToken, null, 2)}`);
        req.userId = decodedToken.userId;
   
        next();
    } catch (error) {
        return res.status(401).json({error: "Invalid Token"});
    }
}

module.exports = authMiddleware;