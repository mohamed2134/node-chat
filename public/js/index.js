var socket = io();
socket.on('connect',function(){
  console.log("connected to server");
});

socket.on('disconnect',function(){
  console.log('disconnected to server');
});

socket.on('newMessage',function(email){
  console.log("new message :",email);
});


// socket.emit('createMessage',{
//   'to':"ahmed",
//   'text':"welcome ahmed to our new site"
// });
