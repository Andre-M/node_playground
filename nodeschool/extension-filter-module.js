var path = require('path');
var fs = require('fs');

function call_readdir(dir_name, extension, callback)
{
	fs.readdir(dir_name, 
		function(err, data)
		{
			if(err) return callback(err);	

			var filtered_list = [];
			for(var i = 0; i < data.length; i++)
			{
				// console.log(data[i]);
				// console.log(extension);
				if(path.extname(data[i]) == '.'+extension)
				{
					// console.log(data[i]);
					filtered_list[filtered_list.length] = data[i];
				}
			}

			callback(err, filtered_list);
		});
}



module.exports = call_readdir;
