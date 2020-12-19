const express = require('express');
//const routes = require('./controllers/');
const sequelize = require('./config/connection');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//static is  for front end files. here we call all files in public folder.
app.use(express.static(path.join(__dirname, 'public')));
// turn on routes
//app.use(routes);

//handlebars
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


// turn on connection to db and server
//fource: true is like adding a drop table line  in schemas
//normaly keep force: false to preserve data
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});