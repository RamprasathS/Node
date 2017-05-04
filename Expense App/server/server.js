var express = require('express'),
    bodyParser     = require('body-parser'),
    methodOverride = require('method-override'),
    expanse = require('./routes/expanseservice'),
    app = express();
	
	
	

app.use(bodyParser());           // pull information from html in POST
app.use(methodOverride());      // simulate DELETE and PUT

//test
//master test

// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

/*app.post('/saveexpanse',function(req,res){
  var user_name=req.body.user;
  var password=req.body.password;
  console.log("User name = "+user_name+", password is "+password);
  res.end("yes");
});*/

app.post('/saveexpanse', expanse.saveExpanse);

app.get('/getexpanse/:id', expanse.findById);

app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});