var socket = io.connect("http://127.0.0.1:4000");

var message = document.getElementById("message");
var button = document.getElementById("send");
var username = document.getElementById("username");
var output = document.getElementById("output");


button.addEventListener('click',function( ) {
    socket.emit('sendingMessage', {
        message:message.value,
        username: username.value,
    });
    message.innerHTML="";
});

socket.on('broadcastMessage',function(data) {
    output.innerHTML += '<p><strong>'+data.username+'  : </strong>'+ data.message+'<p>';
})