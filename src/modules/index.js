import UserRouter from "./User/index.js";
import BookRouter from "./Book/index.js"
import AuthorRouter from "./Author/index.js"
import ImageRouter from "./IMAGE/index.js";

const routes = {
  
  "/users": UserRouter,
  "/books": BookRouter,
  "/author": AuthorRouter,
  "/image": ImageRouter,
 
};

export default routes;