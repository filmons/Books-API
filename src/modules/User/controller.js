import ApiError from "../../helpers/ApiError.js";
//import User from './modules';

class UserController {
  #models;
  constructor(models) {
    this.#models = models;
  }
  login = async (req, res, next) => {
    try {
      if (false) throw new ApiError("user not found !!", 403);
      res.status(200).json({message:"helop"})
    } catch (error) {
      next(error);
    }
  };
}

export default UserController;
