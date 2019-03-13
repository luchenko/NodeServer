const express = require('express');
const morgan = require('morgan');
const app = express();
const routes = require('./routes');
const routeApi = require ('./route-api');

app.use(morgan('tiny'));
app.use(function(req,res,next) {
  // console.log('rquest url:'+req.url);
   next();
});


app.set('appName','Mi primer server');
app.set('views', __dirname + '/views');
app.set('view engine','ejs');
//app.get('/',(req,res) => { res.end('<h1>hello world</h1>');});

app.use(routes);
app.use('/api',routeApi);

app.listen(3000, ()=> console.log('sever started '+app.get('appName')));

