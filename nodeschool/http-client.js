var http = require('http');
var url = process.argv[2];

function response_event_handler(data)
{
	console.log(data);
}

function http_callback(response)
{
	response.setEncoding("utf8");
	response.on("data", response_event_handler);
}

http.get(url, http_callback);