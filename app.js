const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
//flash messages
var session = require('express-session')
var flash = require('connect-flash');
var cookieParser = require('cookie-parser')
//Connect Mongodb
const connectDB=require('./db/connectDb.js')
connectDB();
const underconstruction = require('./middleware/about_middleware.js');
const upload = require('./middleware/image_middleware.js');
app.locals.moment=require('moment');


//EJS SETUP 
app.set('view engine','ejs')
var bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(session({
  secret: 'secret',
  cookie: { maxAge: 60000 },
  resave: false,
  saveUninitialized: false,
  
}));
app.use(cookieParser())
app.use(flash());
//STATIC FILES CSS IMAGE JS LOAD
app.use(express.static('public'))
//ROUTE LOAD
// app.use('/about',underconstruction)
app.use('/blogimage/insert',upload)
const web= require('./routes/web.js');


app.use('/',web);
//MIDDLEWARE USE














app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})