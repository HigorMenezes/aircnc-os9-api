const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const socketio = require('socket.io');
const http = require('http');

const { apiConfig, databaseConfig } = require('./config');
const routes = require('./routes');

const app = express();
const server = http.Server(app);
const io = socketio(server);

mongoose.connect(databaseConfig.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connectedUsers = {};

io.on('connection', socket => {
  const { user_id: userId } = socket.handshake.query;

  connectedUsers[userId] = socket.id;
});

app.use((req, res, next) => {
  req.io = io;
  req.connectedUsers = connectedUsers;

  return next();
});

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'thumbnails')));
app.use(routes);

server.listen(apiConfig.port, () => {
  console.info('Server is running');
});
