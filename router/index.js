const express=require('express');
const router=express.Router();
const homeController=require('../controller/home_controller');

router.get('/',homeController.home);

router.get('/auth/github',homeController.createSession);

router.get('/profile',homeController.profile);

module.exports=router;