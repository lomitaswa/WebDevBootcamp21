const express = require('express');
const User = require('../models/user');
const router = express.Router();
const passport = require('passport');

// Get form to signup
router.get('/signup', (req, res) => {
    res.render('auth/signup');
})

router.post('/signup', async (req, res) => {
    try {
        const user = new User({email: req.body.email, username: req.body.username});
        const newUser = await User.register(user, req.body.password);

        req.flash('success', `Congratulations ${user.username} You Are Successfully Registered`);
        res.redirect('/blogs');
    } catch (err) {

        req.flash('error', err.message);
        res.redirect('/signup')
    }
})

// Get Login Form
router.get('/login', (req, res) => {
    res.render('auth/login');
})

router.post('/login', 
    passport.authenticate('local',
        {
            failureRedirect: '/login',
            failureFlash: true
        }
    ), (req, res) => {
        req.flash('success', `Welcome Back!! ${req.user.username}`)
        res.redirect('/blogs');
    }
)

// Logout the user from current session
router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success', 'Logged Out Successfully');
    res.redirect('/login');
})
module.exports = router;