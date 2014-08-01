var directory_name = process.argv[2];
var extension_to_filter = process.argv[3];
var filter = require('./extension-filter-module.js');

function callback(err, data)
{
	if(err) console.log("There was an error: ", err);
	else
	{
		for(var i = 0; i < data.length; i++)
		{
			console.log(data[i]);
		}
	}
}

filter(directory_name, extension_to_filter, callback)