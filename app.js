var express = require("express");
var bodyParser = require('body-parser');
var router = express.Router();
var path = require('path');
var favicon = require('serve-favicon');
//var seller = require("./router/seller.js");
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(favicon(__dirname + '/public/images/favicon.ico'));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//app.use("/seller",seller);
/*
routing for: /admin
*/
app.use('/', function(req, res){
    try{
        res.sendfile('public/index.htm');
    }
    catch(e){
        console.log(e);
        common.renderErr(res, e);
    }
});
// app.use("/",function(req,res){
//     console.log("hello ");
//     res.send("nitesh");
// });

app.listen(5555);