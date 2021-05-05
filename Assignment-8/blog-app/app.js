const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
// const seedDB = require('./seed');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// Routes
const indexRoute = require('./routes/index');
const blogRoute = require('./routes/blog');
const authRoute = require('./routes/auth');

// Models
const User = require('./models/user');

// DB Connection
mongoose.connect('mongodb://localhost:27017/blogApp',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
.then(()=> console.log('Connected to DB.'))
.catch((e) => console.log(e.message));

// Middleware Declarations
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

const sessionConfig = {
    secret: 'thisisweiredsecret',
    resave: false,
    saveUninitialized: true
};
app.use(session(sessionConfig));
app.use(flash());


// Initializing passport and sessions for storing the users info
app.use(passport.initialize());
app.use(passport.session());

// Configuring passport to use Local Strategy
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    res.locals.currentUser = req.user;
    next();
})
// seedDB();


// API
app.use(indexRoute);
app.use(blogRoute);
app.use(authRoute)

app.get('/', (req, res) => {
    res.send('You hit the root path...');
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listenin on PORT : ${port}`);
});