var http = require("http")
var url = require("url")

var port = process.argv[2]

var iso_req = '/api/parsetime'
var unix_req = '/api/unixtime'

var server = http.createServer(function callback(request, response)
{
	response.writeHead(200, {'Content-Type': 'application/json'})
	var parsed_object = url.parse(request.url, true)
	var result_string = ""
	var date_object = new Date()
	if(parsed_object.path = iso_req)
	{
		result_string = JSON.stringify({"hour":date_object.getHours(), "minute":date_object.getMinutes(), "second":date_object.getSeconds()})
	}
	else if(parsed_object.path = unix_req)
	{
		result_string = JSON.stringify({"unixtime":date_object.getTime()})
	}
	else
	{
		result_string = JSON.stringify({"error":"routing unsuccessful"})
	}

	response.end(result_string)

})

server.listen(port)