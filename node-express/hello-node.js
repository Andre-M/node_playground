var http = require('http');

function handle_request(request, response)
{
	var path = request.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
	switch(path)
	{
		case '' || '/home':
			response.writeHead(200, { 'Content-Type': 'text/plain' });
			response.end('Homepage');
			break;
		case '/about':
			response.writeHead(200, { 'Content-Type': 'text/plain' });
			response.end('About');
			break;
		default:
			response.writeHead(404, { 'Content-Type': 'text/plain' });
			response.end('Not Found');
			break;
	}
}

http.createServer(handle_request).listen(3000);