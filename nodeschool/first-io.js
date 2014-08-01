var fs = require('fs');

var path_to_file = process.argv[2];
var file_buffer = fs.readFileSync(path_to_file);
var file_string = file_buffer.toString();

var split_file = file_string.split('\n');

console.log(split_file.length-1);