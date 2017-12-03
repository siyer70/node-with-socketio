const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.port || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New connection event received from client');

    socket.on('disconnect', (socket) => {
        console.log('Client disconnected event received');
    });

});

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
