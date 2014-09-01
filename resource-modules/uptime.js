// Module to retrieve the uptime of a Linux system

var fs = require('fs');

function get_uptime(){
	console.log("In get_uptime... ");
	fs.readFile('/proc/uptime', function(err, data){
		if(err) return console.log("error: " +err);
		console.log("data: " +data.toString());
		return data.toString();
	});
}

module.exports = get_uptime;