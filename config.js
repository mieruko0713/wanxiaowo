'use strict'
var path = require("path");
var wechat_file = path.join(__dirname,"./config/wechat.txt");
var util = require("./libs/util");

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

module.exports = config;