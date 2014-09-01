var http = require("http")
var fs = require("fs")
var port = process.argv[2]
var file_location = process.argv[3]

var server = http.createServer(function callback(request, response)
{
	fs.createReadStream(file_location).pipe(response)
})

server.listen(port)