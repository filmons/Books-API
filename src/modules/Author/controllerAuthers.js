import ApiError from '../../helpers/ApiError';
import Author from './author';
import env from '../../config/env'

class AuthorController  {

    #models;
  constructor(models) {
    this.#models = models;
  }

    getAll = async ({ rq ,res, next }) => {
        try {
            const author = await Author.findAll();
            res.status(200).json(author);
        } catch (err) {
            next(err);
        }
     }
    add = async (req, res, next) => {
        try {
            const author = await Author.create({ ...req.body });
            res.status(201).json(author);
        } catch (err) {
            next(err);
        }
    }
};

export default AuthorController;