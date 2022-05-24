const path = require('path');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
var cookiesession = require('cookie-parser');
var sesion = require('express-session');

//instanciando el servidor de paginas

const app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname), 'views')
app.set('views engine', 'ejs')
app.use('/')
app.listen(app.get('port'), () => {
    console.log(`aplicacion iniciada $ {app.get('port ')}`)
});