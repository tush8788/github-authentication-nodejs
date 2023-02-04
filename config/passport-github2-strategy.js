const passport=require('passport');
const githubStrategy=require('passport-github2').Strategy;
const UserDB=require('../model/user');
const crypto=require('crypto');


passport.use(new githubStrategy({
    clientID:"61970cdace94d924410c",
    clientSecret:"a96bf1e535527199be7d9afa91cf6b3601846f3f",
    callbackURL:"http://localhost:8000/auth/github/callback",
    passReqToCallback:true
}, async function(req,accessToken,refreshToken,profile,done){
    // console.log(profile);
    try{
        let user=await UserDB.findOne({userid:profile.id});
        if(!user){
            user=await UserDB.create({
                userid:profile.id,
                username:profile.displayName,
                avatar:profile.photos[0].value,
                password:crypto.randomBytes(20).toString('hex')
            })
        }
       
        return done(null,user);
    }
    catch(err){
        console.log(err);
        req.flash('error',"Invaild");
        return done(err);
    }
}))

passport.serializeUser(function(user,done){
    done(null,user.id);
})

passport.deserializeUser(async function(id,done){
    try{
        let user=await UserDB.findById(id);
        done(null,user);
    }
    catch(err){
        console.log(err);
        return done(err);
    }
})

passport.checkAuthentication=function(req,res,next){
    if(req.isAuthenticated()){
       return next();
    }
    return res.redirect("/");
}

module.exports=passport;