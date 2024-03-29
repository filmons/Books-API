import ApiError from "../../helpers/ApiError.js";
import Users from './user';
import Image from '../IMAGE/image';
import bcrypt from 'bcrypt';
import Jwt  from "jsonwebtoken";
import env from '../../config/env'

class UserController {
  #models;
  constructor(models) {
    this.#models = models;
  }

  getAll =  async (req, res, next ) => {
    try {
      // const user = req.userID;
        const users = await Users.findAll();
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}

getone =  async (userID ) => {
  try {
    // const user = req.userID;
      const users = await Users.findOne({
        where: {
          userID
        
        },
        include: [{
          model: Image,
          as: 'images',
        }]
      });
      return users
  } catch (error) {
    console.log(error)
      // next(error);
  }
}

register = async (req, res, next) => {
  try {
      const {email,password, firstName, lastName } = { ...req.body };

      if (!email || !password || !firstName || !lastName) 

    throw new ApiError("you have to file all the infrmation", 403);

    const hash = await bcrypt.hash(password,10);

    const user = await Users.create({email, firstName, lastName,password: hash});
    //this.#models. j'ai enlaivé ce code car ca casse 
      res.status(201).json(user);

  } catch (error) {

      next(error);
  }
}
  login = async (req, res, next) => {
    try {
      const {email, password} = {...req.body};
      
      if (!email || !password) 
      throw new ApiError("user not found !!", 403);

      const user = await Users.findOne({where: {email}});
      if (!user)
      throw new ApiError(403, 'user not fuond SO YOU CAN NOT LOG IN');
      console.log(user);

      const result = await bcrypt.compare(password, user.password);
       if (!result)
       throw new ApiError(403, 'email/passward incorect');
console.log(env.jwt_secret)
      const token = await Jwt.sign({id: user.id},env.jwt_secret);

      res.header('Autorisation',`Bearer ${token}`);

      res.status(200).json('auth succes is ok ')

    } catch (error) {
      next(error);
    }
  }
}

export default UserController;
