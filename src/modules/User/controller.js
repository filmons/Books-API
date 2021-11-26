import ApiError from "../../helpers/ApiError.js";
import Users from './user';
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
        const users = await Users.findAll();
        res.status(200).json(users);
    } catch (err) {
        next(err);
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

  } catch (err) {

      next(err);
  }
}
// register =  async (req, res, next) => {
//   try {
//       const user = await Users.create({ ...req.body });
//       res.status(201).json(user);
//   } catch (err) {
//       next(err);
//   }
// }

  login = async (req, res, next) => {
    try {
      const {email, password} = {...req.body};

      if (!email || !password) 
      throw new ApiError("user not found !!", 403);

      const user = await Users.findOne({where: {email}});
      if (!user)
      throw new ApiError(403, 'user not fuond SO YOU CAN NOT LOG IN');

      const result = await bcrypt.compare(password, user.password);
       if (!result)
       throw new ApiError(403, 'email/passward incorect');

      const token = await Jwt.sign({id: user.id},env.jwt_secret);

      res.headers('Autorisation',`Bearer ${token}`);

      res.status(200).json('auth succes')

    } catch (error) {
      next(error);
    }
  }
}

export default UserController;
