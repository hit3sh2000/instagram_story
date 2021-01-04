require('./models/db');
const express = require('express');
const session = require('express-session');
const bodyparser = require('body-parser');
const story = require('./controllers/storyController');
const user = require('./controllers/userController');
const app = express()

app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use(session({ 		//Usuage
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
  }));

app.use('/user',user);
app.use('/story',story);

const PORT = 3000;
app.listen(PORT,console.log(`Port is running on ${PORT}`));

