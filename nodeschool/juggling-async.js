var http = require('http');
var bl = require('bl');

function track_callbacks(index)
{
	http.get(process.argv[index], 
		function http_callback(response)
		{
			response.pipe(bl(
				function response_event_handler(err, data)
				{
					if(err)
					{
						console.log("Error"+err);
						return;
					}

					results[index-2] = data.toString();
					all_received += index;
					if(all_received == 9)
					{
						for(j = 0; j < results.length; j++)
						{
							console.log(results[j]);
						}
					}
				})
			);
		}
	);
}

var results = [];
var all_received = 0;
for(i = 2; i < 5; i++)
{
	track_callbacks(i);
}
