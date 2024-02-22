import jwt from 'jsonwebtoken';

const jwtAuth = (req, res, next) => {
    
    // 1. Read the token
    const token = req.headers['authorization'];

    // 2. If no token, return the error
    if(!token){
        return res.send(401).status('Unauthorized');
    }
    // 3. Check if token is valid
    try {
        const payload = jwt.verify(
            token,
            "AIb6d35fvJM4O9pXqXQNla2jBCH9kuLz"
        );
        // console.log(payload);
        req.userId = payload.userId;
    } catch (err) { 
        // 4. Return error
        return res.status(401).send("Unauthorized");        
    }
    // 5. Call next middleware
    next();
}

export default jwtAuth;