const express = require('express');
const app = express();
const session = require('express-session');
const port = 3000;

// Allow express to connect to databased
const store = require('connect-loki');
const LokiStore = store(session);

// for express to use static images and css located in directory 'public
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

app.use(session({
  name: 'pear-app',
  resave: false,
  saveUninialized: true,
  secret: 'tomato blistered',
  store: new LokiStore({})
}));

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});