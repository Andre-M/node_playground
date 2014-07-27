var http = require("http");
var url = require("url");

function start(route)
{
	function on_request(request, response)
	{

		var response_code = 200;
		var pathname = url.parse(request.url).pathname;

		console.log("Request for " + pathname + " received.");

		if(route !== undefined)
		{
			route(pathname);	
		}
		else
		{
			console.log("The server was NOT provided a router, NOT routing");
		}
		
		response.writeHead(response_code, {"Content-Type": "text/plain"});
		response.end();
	}	

	console.log("Creating server...");
	http.createServer(on_request).listen(8888);
	console.log("Server has started. Press CTRL-C to terminate...");
}

exports.start = start;