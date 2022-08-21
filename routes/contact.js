const express = require ('express') ;
const router = express.Router () ;
const contactController = require ('../controllers/contactController') ;
const uploadFile = require('../middlewares/multer'); 

router.get ('/', contactController.get) ;
router.post('/', uploadFile() ,contactController.post)


module.exports = router