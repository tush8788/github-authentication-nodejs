module.exports.home=(req,res)=>{
    if(req.isAuthenticated()){
        return res.redirect("/profile");
    }
    return res.render('login',{title:"Login"});
}

module.exports.createSession=(req,res)=>{
    req.flash('success','successfully login');
    return res.redirect('/profile');
}

module.exports.profile=(req,res)=>{
    return res.render('profile',{
        title:"profile",
        user:req.user
    })
}

module.exports.signOut=(req,res)=>{
    req.logout((err)=>{
        if(err){
        console.log(err);
        }
        req.flash('success','successfully logout');
        return res.redirect('/');
    })
}