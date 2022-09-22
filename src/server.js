
const express = require('express');
const port = 8080
var path = require ('path');
const app = express();



const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);


// EJS //
app.set("view engine","ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(express.static( "./src/public"));

io.on("connection",(socket)=>{
    
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);

      });
});



app.get('/', (req, res) => res.render("index"));

server.listen(port, () => {
    console.log('listening on *:3000');
  });
