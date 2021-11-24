import { Router } from "express";

export default (controller) => {
  const router = Router();

  router.route("/login").get(controller.login);
  
  return router;
};

