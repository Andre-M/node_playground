var exec = require('child_process').exec;
exec('ipconfig', function(error, stdout, stderr){
	console.log("in exec");
	console.log("error: " + error);
	console.log("stdout: " + stdout);
	console.log("stderr: " + stderr);
});