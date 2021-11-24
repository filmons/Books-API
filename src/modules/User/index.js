import router from "./router.js";
import UserController from "./controller.js";

const models = {};

const controller = new UserController(models);
const UserRouter  = router(controller);

export default UserRouter ;
