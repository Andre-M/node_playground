var http = require("http");
var url = require("url");

function start(route)
{
	function on_request(request, response)
	{

		var response_code = 200;
		var pathname = url.parse(request.url).pathname;

		console.log("Request received!");
		console.log("Request for " + pathname + " received.");

		if(route !== undefined)
		{
			console.log("The server was provided a router, routing");
			route(pathname);	
		}
		else
		{
			console.log("The server was NOT provided a router, NOT routing");
		}
		
		response.writeHead(response_code, {"Content-Type": "text/plain"});
		response.write("This is a simple node.js server running as a module. \nIs there a newline?");
		response.end();
	}	

	console.log("Creating server...");
	http.createServer(on_request).listen(8888);
	console.log("Server has started.");
}

function dood()
{
	console.log("Dude!");
}

exports.start = start;
exports.dood = dood;
