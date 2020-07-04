const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static(path.join(__dirname, "public")));

io.on("connection", (socket) => {
  socket.broadcast.emit("message", "A New User has Joined");

  socket.on("chatMessage", (msg) => {
    io.emit("message", msg);
  });

  socket.on("disconnect", () => {
    socket.broadcast.emit("message", "A User has left");
  });
});

server.listen(3000, () => {
  console.log("Server started at port 3000");
});
