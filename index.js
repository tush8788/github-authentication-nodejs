const express=require('express');
const expressLayouts=require('express-ejs-layouts');
const db=require('./config/mongoose');
const passport=require('passport');
const githubStrategy=require('./config/passport-github2-strategy');
const expressSession=require('express-session');
const flash=require('connect-flash');
const coustomMware=require('./config/middleware');
const dotenv=require('dotenv').config();

const port=process.env.Port || 8000;

const app=express();

app.set('view engine','ejs');
app.set('views','./views');

app.use(expressLayouts);

// session cookie
app.use(expressSession({
    name:"githublogin",
    secret:"ANyvakle",
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000*60*100)
    }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());
app.use(coustomMware.setFlash);

app.use('/',require('./router/index.js'));

app.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log(`server is up on port ${port}`);
})