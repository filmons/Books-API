import { Router } from "express";
const fs = require("fs");
const upload = require("../../middlewares/upload");
//import isAuth from "../../middlewares/auth";
export default (controller) => {
  const router = Router();

router.route("/").get(controller.getall);
router.post("/upload", upload.single("file"), controller.uploadFiles);

router.get("/:id", async (request, response) => {
  const dj = await controller.getClub(request.params.id);
  const image = dj.data;
  const buf =  new Buffer(image)
  console.log(buf, 'this ti the buf')
  response.status(200).json({buf});
}); 
  return router;
};
