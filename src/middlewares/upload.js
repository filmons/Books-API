const multer = require("multer");
// import scdfd from ("../resources")
const path = require("path");

const imageFilter = (req, file, cb) => {
  console.log(file, "this is th file")
  if (file.mimetype.startsWith("video")) {
    cb(null, true);
  } else {
    cb("Please upload only images.", false);
  }
};

var storage = multer.diskStorage({
//   destination: (req, file, cb) => {
    // cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
//     console.log(cb, 'this ti cb', file)
//   },
destination: './upload/images',
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
   
  },
});

var uploadFile = multer({ storage: storage, fileFilter: imageFilter });
module.exports = uploadFile;