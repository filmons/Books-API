import router from "./router.js";
import UserController from "./controller.js";
import User from "./user.js";



const controller = new UserController({User});
const UserRouter  = router(controller);

export default UserRouter ;
