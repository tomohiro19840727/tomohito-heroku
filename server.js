const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const io = new Server(server);
const { Server } = require("socket.io"); 

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("栗城が頑張りました");

  socket.on("chat message" , (msg) => {
    console.log("メッセージ:" + msg);
    io.emit("chat message", msg);
  });
});

server.listen(process.env.PORT || 3000, () => {
  console.log("listening on 3000");
});
