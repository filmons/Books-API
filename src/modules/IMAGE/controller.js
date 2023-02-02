import ApiError from "../../helpers/ApiError.js";
import Image from './image';
import bcrypt from 'bcrypt';
import Jwt  from "jsonwebtoken";
import env from '../../config/env'
const fs = require("fs");
class ImageController {
    #models;
    constructor(models) {
      this.#models = models;
    }
    getall =  async (req, res, next ) => {
        try {
          const club = await Image.findAll({
            attributes: ["name", "type"]
          });
          return res.status(200).json({club});
        } catch (error) {
          console.log(error)
            next(error);
        }
    }
    getClub =  async (imageId) => {
      const club = await Image.findOne({
        where: {
          imageId
        },
        // attributes: ["id", "name"]
      });
      if (!club) {
        throw new NotFoundError("Ressource introuvable", "Ce club n'existe pas");
      }
      return club;

    }
    /////////////
uploadFiles = async (req, res) => {
    console.log(req.file, 'this is the rqu')

        try {
          console.log(req.file);
      
          if (req.file == undefined) {
            return res.send(`You must select a file.`);
          }
      
          Image.create({
            type: req.file.mimetype,
            name: req.file.originalname,
            data: fs.readFileSync(
                "upload/images/" + req.file.filename
            //   cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
            ),
          }).then((image) => {
            fs.writeFileSync(
              "upload/images/" + image.name,
              image.data
            );
      
            return res.send(`File has been uploaded.`);
          });
        } catch (error) {
          console.log(error, 'this ti error');
          return res.send(`Error when trying upload images: ${error}`);
        }
      };
}
export default ImageController