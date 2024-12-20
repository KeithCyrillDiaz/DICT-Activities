const jwt = require('jsonwebtoken');


const authMiddleware = (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if(!token){
            return res.status(401).json({error: "No token provided"});
        }

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decodedToken.userId;
        next();
    } catch (error) {
        return res.status(401).json({error: "Invalid Token"});
    }
}