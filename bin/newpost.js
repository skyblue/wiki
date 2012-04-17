#!/usr/bin/env node
Date.prototype.format = function(format) {
    var o = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S": this.getMilliseconds() //millisecond
    };
    if (/(y+)/.test(format)) format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o) if (new RegExp("(" + k + ")").test(format)) format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    return format;
};


var fs = require("fs");

var TEMPLATE = "../template.markdown",
    POSTS_DIR = "../_posts";

var args = process.argv;

if (args.length < 3) {
    console.log("Usage:", "% node newpost.js {title} \n");
    return;
}

var title = args[2];

var tpl = fs.readFileSync(TEMPLATE).toString();
var d = new Date();
var date = d.format("yyyy-MM-dd");
var time = d.format("yyyy-MM-dd hh:mm:ss");
var filename = date + "-" + title + ".markdown";

tpl.replace();
console.log(tpl,d,filename);
