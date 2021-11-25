import ApiError from "../../helpers/ApiError.js";
import Users from './user';
import bcrypt from 'bcrypt';
import Jwt  from "jsonwebtoken";

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
  login = async (req, res, next) => {
    try {
      const {email, password} = {...req.body};

      if (!email || !password) 
      throw new ApiError("user not found !!", 403);

      const user = await this.#models.users.findOne({where: {email}});
      if (!user)
      throw new ApiError(403, 'user not fuond');

      const result = await bcrypt.compare(password, user.password);
      if (!result)
      throw new ApiError(403, 'email/passward incorect');
const token = await Jwt.sign({id: user.id})
      res.status(200).json(user)

    } catch (error) {
      next(error);
    }
  }


  register = async (req, res, next) => {
    try {
        const {email,password, firstName, lastName } = { ...req.body };

        if (!email || !password || !firstName || !lastName) 

      throw new ApiError("you have to file all the infrmation", 403);

      const hash = await bcrypt.hash(password,10);

      const user = await this.#models.Users.create({email,password, firstName, lastName: hash});

        res.status(201).json(user);

    } catch (err) {

        next(err);
    }
};
}

export default UserController;
