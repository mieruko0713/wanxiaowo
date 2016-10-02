"use strict"

var Koa = require("koa");
var wechat = require("./wechat/g");
var path = require("path");
var util = require("./libs/util")
var wechat_file = path.join(__dirname,"./config/wechat.txt")
var config = {
	wechat: {
		appID: "wx554a55ffb7e3c342",
		appSecret: "7ef979ca8f3305031d0ae2f2efe1c88e",
		token:"xiaowanzihahaha",
		getAccessToken: function() {
			return util.readFileAsync(wechat_file);
		},
		saveAccessToken: function(data) {
			data = JSON.stringify(data);
			return util.writeFileAsync(wechat_file,data);
		}
	}
}

var app = new Koa();

app.use(wechat(config.wechat));

app.listen(1234);
console.log("listening 1234");