const express = require('express');
const path = require('path');
const routes = require('./controllers/');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3001;
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'Helping people is awesome',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(sess));

app.use(routes);


app.listen(PORT, () => console.log('Now Listening'));