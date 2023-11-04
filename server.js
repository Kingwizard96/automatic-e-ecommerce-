const express = require('express');
const session = require('express-session');
const sqlizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers: require('./utils/helpers') });
const webToken = require('jsonwebtoken');


const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();

const sess = {
  secret: 'secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: true,
  saveUninitialized: true,
  store: new sqlizeStore({
    db: sequelize,
  }),
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(session(sess));

const routes = require('./controllers');

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`);
  });
});