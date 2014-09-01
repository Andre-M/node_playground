var net = require('net');
var port_to_listen_on = process.argv[2];

function get_date_string()
{
	var date_result = "";
	var date_object = new Date();

	var year_string = date_object.getFullYear().toString();
	var month_string = (date_object.getMonth()+1).toString();
	var day_string = date_object.getDate().toString();
	var hour_string = date_object.getHours().toString();
	var minute_string = date_object.getMinutes().toString();

	month_string = zero_fill_if_single_char(month_string);
	day_string = zero_fill_if_single_char(day_string);
	hour_string = zero_fill_if_single_char(hour_string);
	minute_string = zero_fill_if_single_char(minute_string);

	date_result += year_string;
	date_result += "-";
	date_result += month_string;
	date_result += "-";
	date_result += day_string;
	date_result += " ";
	date_result += hour_string;
	date_result += ":";
	date_result += minute_string;
	date_result += "\n";

	return date_result;
}

function zero_fill_if_single_char(string)
{
	if(string.length < 2) return "0"+string;

	return string;
}

var server = net.createServer(function (socket)
	{
		socket.end(get_date_string());
	});

server.listen(port_to_listen_on);
