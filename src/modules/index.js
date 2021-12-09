import UserRouter from "./User/index.js";
import BookRouter from "./Book/index.js"
import AuthorRouter from "./Author/index.js"

const routes = {
  
  "/users": UserRouter,
  "/books": BookRouter,
  "/author": AuthorRouter,
 
};

export default routes;