// Module to retrieve the uptime of a Linux system
// TODO: examine using 'cat' or 'less' Linux programs in order
// to increase performance of this module.

var fs = require('fs');

function get_uptime(callback){
	console.log("In get_uptime... ");
	fs.readFile('/proc/uptime', callback);
}

module.exports = get_uptime;