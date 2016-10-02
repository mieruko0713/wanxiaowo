"use strict"

var Koa = require("koa");
var wechat = require("./wechat/g");
var util = require("./libs/util")
var path = require("path");
var config = require("./config");
var weixin = require("./weixin");
var wechat_file = path.join(__dirname,"./config/wechat.txt");


var app = new Koa();

app.use(wechat(config.wechat,weixin.reply));

app.listen(1234);
console.log("listening 1234");