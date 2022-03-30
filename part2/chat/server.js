var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// get방식으로 /가 들어오면 function ~ 으로 콜백함수 호출
// 서버가 실행되는 현재 디렉터리 __dirname
// .index.html로 보내줘라
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

// on은 이벤트, connection이라는 이름으로 이벤트 발생시
io.on('connection', function (socket) {
  // chat message라는 이름으로 이벤트 발생시 콜백호출
  // msg를 받아서 io서버에 연결된 chat message이벤트를 날림
  socket.on('chat message', function (msg) {
    io.emit('chat message', msg);
  });
});

// http 3000포트에 띄워라
http.listen(3000, function () {
  console.log('listening on *:3000');
});
