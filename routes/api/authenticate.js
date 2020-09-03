const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
const authController = require('../../controller/authenticate')
//////

router.post('/register', authController.singUp)
router.post('/login', authController.signIn)
router.get('/me', passport.authenticate('jwt', { session: false }), authController.homePage)


// module.exports = router;

// ////
// const express = require('express');
// const userControler = require('../../controller/user');
// const validateUser = require('../../controller/auth');

// const router = express.Router();


// router.post('/validateUser', validateUser.authUserFromDataBase); //signin
// router.post('/addUser', userControler.addUserAuthToDataBase);  //signup



module.exports = router;


