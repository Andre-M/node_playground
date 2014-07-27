function route(pathname)
{
	console.log("ROUTING request for: " + pathname);

	pathname = pathname.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
	console.log("Normalized path: " + pathname);

	switch(pathname)
	{
		case '' || '/home':
			console.log("Received request for home!");
			break;
		case 'test-html':
			console.log("Received request for test-html.");
			break;
		default:
			console.log("Default case for url request.");
			break;
	}
	
}

exports.route = route;