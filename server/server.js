const path = require('path');
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const public = path.join(__dirname+'/../public');
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.static(public));

let server = http.createServer(app);
let io =socketIo(server);

io.on('connection',(socket)=>{
   console.log("new user connect to server");

   socket.on('disconnect',(socket)=>{
      console.log(" user disconnect to server");
   });


   socket.on('createMessage',function(mesg){

       io.emit('newMessage',{
         'from':mesg.from,
         'text':mesg.text,
        'createdAt' : new Date()
       });
   });


});













server.listen(PORT,()=>{
  console.log("start listening on port ",PORT);
})
