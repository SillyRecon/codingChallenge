const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

//app.use(express.static(process.cwd()+"/ui/"));

const port = 3000;
//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
//app.use(cookieParser());

/*
app.use(session({
  secret: 'secret'
}));
*/
const elements = require('./data/elements.json');
elements.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
app.get('/test', (req,res) => {
  res.send("API works!!!");
});

app.get('/', (req, res) => {
  res.send("API works!!!");
});

app.get('/elements', (req,res) =>{
  res.json(elements);
});

//Set Ports
app.set('port', (process.env.PORT || port));

app.listen(app.get('port'), function(){
	console.log('Server started on port '+app.get('port'));
});


module.exports = app;
