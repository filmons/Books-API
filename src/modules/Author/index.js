
import router from "./router.js";
import AuthorController from "./controllerAuthers";
import Author from "./author";

//const models = {Author};

const controller = new AuthorController({Author});
const Authorrouter  = router(controller);

export default Authorrouter ;
