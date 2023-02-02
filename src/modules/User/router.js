import { Router } from "express";
//import isAuth from "../../middlewares/auth";
export default (controller) => {
  const router = Router();

  router.route("/getAll").get(controller.getAll);
  // router.route("/:id").get(controller.getone);
  router.route("/register").post(controller.register);
  router.route("/login").post(controller.login);
  
  router.get("/:id", async (request, response) => {
    const dj = await controller.getone(request.params.id);
    console.log(dj)
    response.status(200).json({dj});
  }); 
  
  
  return router;
};

