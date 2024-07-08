const multer = require("multer");
const path = require('path');

const multerStorage = multer.diskStorage({
    destination: (req, file, callBack) => {
      callBack(null, './upload');
    },
    filename: (req, file, callBack) => {
     callBack(null, `${Date.now()}` + path.extname(file.originalname))
        //path.extname get the uploaded file extension
    }
  });
  const multerFilter = (req, file, callBack) => {
     
          if (!file.originalname.match(/\.(png|jpg|webp|jpeg)$/)) { 
               // upload only png and jpg format
             return callBack(new Error('Please upload a Image'))
           }
         callBack(null, true)
      
  };
  exports.upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter
  });