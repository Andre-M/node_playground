var uptime = require('./uptime.js');

uptime(function callback(err, data){
	console.log("data from callback: "+data);
});