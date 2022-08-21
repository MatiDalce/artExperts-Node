const multer = require('multer'); 

function uploadFile() {
    
     const storage = multer.diskStorage({

         destination : './public/files/',
         filename: function (req, file, cb) {
            const name = req.body.email + file.originalname 
            cb(null,name)
          }

     })

    const upload = multer({ storage: storage}).array('imagenes');

    return upload

}


module.exports = uploadFile/**/