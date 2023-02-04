module.exports.home=(req,res)=>{
    return res.render('login',{title:"Login"});
}

module.exports.createSession=(req,res)=>{
    return res.redirect('/profile');
}

module.exports.profile=(req,res)=>{
    return res.render('profile',{title:"profile"})
}