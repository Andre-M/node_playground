var fs = require('fs');

var path_to_file = process.argv[2];

function count_newlines_callback(err, data)
{
	if(err) return 0;

	var file_string = data.toString();
	var split_file = file_string.split('\n');

	console.log(split_file.length-1);

	return split_file.length-1;
}

fs.readFile(path_to_file, count_newlines_callback);