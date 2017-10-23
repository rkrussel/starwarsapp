const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname,'public')));

app.set('view engine', 'ejs');
const routes = require('./routes');

//routes
app.get('/', routes.home);
app.get('/episode/:episode_number?',routes.singleMovie);
//app.get('*', routes.notFound);
app.get('/*',routes.notFound);


app.listen(process.env.PORT || 3000);