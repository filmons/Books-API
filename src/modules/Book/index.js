import router from "./router.js";
import BookController from "./controllerBooks.js";
import Book from "./book.js";

//const models = {Book};

const controller = new BookController({Book});
const BookRouter  = router(controller);

export default BookRouter ;
