var http = require('http');
var bl = require('bl');

var url = process.argv[2];

function response_event_handler(err, data)
{
	if(err)
	{
		console.log("Error"+err);
		return;
	} 

	console.log(data.length);
	console.log(data.toString());
}

function http_callback(response)
{
	response.pipe(bl(response_event_handler));
}

http.get(url, http_callback);
