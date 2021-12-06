import { Router } from 'express';
//import bookController from './controllerBooks.js';

export default (controller) => {
    const router = Router();
  
    router.route("/getAllBook").get(controller.getAll);
    //router.route("/registerBook").post(controller.register);
    //router.route("/login").post(controller.login);
  
    
    
    
    return router;
  };
  

