var express = require( 'express');
var path = require( 'path' );
var port = 3000;
var app = express();
var bodyParser = require('body-parser');

app.use( express.static( 'public' ) );
app.use(bodyParser.urlencoded({
    extended:true
}));


// spin up server
app.listen( port, function(){
  // server side logs show up in terminal
  console.log( 'server up on', port );
}); // end spin up server

// base url
app.get( '/', function( req, res ){
  // this is the root url
  console.log( 'base URL hit' );
  res.sendFile( path.resolve( 'views/index.html' ) );
}); // end base url

var serviceCounter = 0;

app.get( '/served', function( req, res){
  serviceCounter++
  console.log('servicing your serve', serviceCounter);
  var responseService = {count: serviceCounter}; 
  res.send(responseService);
});

app.post( '/served', function(req, res){
  console.log('posting your serve mf', req.body);
  res.send('posting your serve mf with heat');
})
