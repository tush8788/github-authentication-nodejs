const express=require('express');
const router=express.Router();
const homeController=require('../controller/home_controller');
const passport = require('passport');

router.get('/',homeController.home);

router.get('/auth/github',passport.authenticate('github',{scope:['user:email']}));

router.get('/auth/github/callback',passport.authenticate('github',{failureRedirect:'/'}),homeController.createSession);

router.get('/profile',passport.checkAuthentication,homeController.profile);

router.get('/logout',homeController.signOut);

module.exports=router;