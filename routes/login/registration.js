const express = require('express');

const router = express.Router();
const registrationController = require('../../controllers/Login/registration');
const signinController = require('../../controllers/Login/signin');

router.post('/registration',registrationController.registration);

router.get('/signup', registrationController.getSignup);

router.post('/signin', signinController.postSignin);

// router.get('/signin', signinController.getSignin);

module.exports = router;