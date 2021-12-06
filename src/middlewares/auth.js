import ApiError from "../helpers/ApiError";
import  Jwt  from "jsonwebtoken";
import env from "../config/env";


const isAuth =  async (req, res, next) => {
    try {
     const token = req.headers['Authorisation'].spilt('')[1];

    if(!token)
        throw new ApiError(401,'missing token');
    
        const decoded = await Jwt.verify(token, env.jwt_secret);
        req.userId = decoded.id;
        next();
    }catch(error){
        res.status(401).json('token is not valide');

    }
}

export default isAuth