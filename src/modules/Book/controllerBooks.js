import ApiError from '../../helpers/ApiError';
import Book from './book.js';
import env from '../../config/env'

class BookController  {

    #models;
  constructor(models) {
    this.#models = models;
  }

    getAll = async ({ rq ,res, next }) => {
        try {
            const books = await Book.findAll();
            res.status(200).json(books);
        } catch (err) {
            next(err);
        }
     }
    add = async (req, res, next) => {
        try {
            const book = await Book.create({ ...req.body });
            res.status(201).json(book);
        } catch (err) {
            next(err);
        }
    }
};

export default BookController;