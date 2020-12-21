const express = require('express');
const routes = require('./controllers/');
const path = require('path');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3001;
//const SequelizeStore = require('connect-session-sequelize')(session.Store);

// const sess = {
//     secret: 'Helping people is awesome',
//     cookie: {},
//     resave: false,
//     saveUninitialized: true,
//     store: new SequelizeStore({
//         db: sequelize
//     })
// };

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(session(sess));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);


app.listen(PORT, () => console.log('Now Listening'));