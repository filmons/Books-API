import UserRouter from "./User/index.js";
import BookRouter from "./Book/index.js"

const routes = {
  
  "/users": UserRouter,
  "/books": BookRouter,
 
};

export default routes;