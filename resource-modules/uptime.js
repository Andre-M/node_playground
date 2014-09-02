// Module to retrieve the uptime of a Linux system

var fs = require('fs');

function get_uptime(callback){
	console.log("In get_uptime... ");
	fs.readFile('/proc/uptime', callback);
}

module.exports = get_uptime;