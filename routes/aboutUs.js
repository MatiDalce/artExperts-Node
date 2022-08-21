const express = require ('express') ;
const router = express.Router () ;
const aboutUsController = require ('../controllers/aboutUsController') ;

/* const cookieParser = require('cookie-parser')

router.use(cookieParser()) */



router.get ('/', aboutUsController.get) ;


module.exports = router