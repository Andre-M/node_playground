var server = require("./server");
var router = require("./router");


console.log("Starting server...");
//server.start();
server.start(router.route);

server.dood();
