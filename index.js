const express = require('express');
const socket= require('socket.io');
var app = express();

var server = app.listen(4000,function() {
    console.log("Listening on Port 4000");
})

app.use(express.static("public"));

var upgraderServer = socket(server);

upgraderServer.on("connection",function(socket) {
    
    socket.on('sendingMessage',function(data) {
        upgraderServer.emit('broadcastMessage',data);
    })
    console.log("WebSocket Connected",socket.id);
});