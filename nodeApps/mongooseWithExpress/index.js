const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const productRoute = require('./routes/product');
const mongoose = require('mongoose');
const Product = require('./models/product');

const port = 4000;



// Express Statics
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodOverride('_method'));

// DB Connection
mongoose.connect(
    'mongodb://localhost:27017/shopAppTest',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
}).then(() => {
    console.log(`Connected to mongoDB...`)
}).catch( (e) => {
    console.log('Connection Failed...');
    console.log(e.message);
})

// Routes
app.use(productRoute);

//  Server 
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
})