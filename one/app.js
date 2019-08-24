const express=require('express');
const ajaxRouter=require('./routes/myajax.js');
const bodyParser=require('body-parser');
//const session = require("express-session");
var server=express();
server.listen(8080);
server.use(bodyParser.urlencoded(
	{exrtender:false}	
));
//server.use(session({
//   secret:"128位字符串",
//   resave:true,
//   saveUninitialized:true
// }))
server.use(express.static('public'));
server.use('/ajax',ajaxRouter);