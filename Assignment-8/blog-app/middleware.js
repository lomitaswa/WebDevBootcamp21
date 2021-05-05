const isLoggedIn = (req, res, next) => {
    if(!req.isAuthenticated()){
        req.flash('error', 'You need to Log In')
        return res.redirect('/login')
    }
    next();
}

module.exports = {isLoggedIn};