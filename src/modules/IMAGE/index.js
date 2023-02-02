import router from "./router.js";
import ImageController from "./controller.js";
import Image from "./image";



const controller = new ImageController({Image});
const ImageRouter  = router(controller);

export default ImageRouter ;
