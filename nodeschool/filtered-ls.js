var fs = require('fs');
var path = require('path');

var directory_name = process.argv[2];
var extension_to_filter = process.argv[3];

function print_files_by_extension_callback(err, list)
{
	for(var i = 0; i < list.length; i++)
	{
		if(path.extname(list[i]) == '.'+extension_to_filter)
			console.log(list[i]);
	}
}

fs.readdir(directory_name, print_files_by_extension_callback);

