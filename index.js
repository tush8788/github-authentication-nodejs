const express=require('express');
const expressLayouts=require('express-ejs-layouts');
const port=8000;

const app=express();

app.set('view engine','ejs');
app.set('views','./views');

app.use(expressLayouts);

app.use('/',require('./router/index.js'));

app.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log(`server is up on port ${port}`);
})