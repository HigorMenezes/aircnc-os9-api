const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const { apiConfig, databaseConfig } = require('./config');
const routes = require('./routes');

const app = express();
mongoose.connect(databaseConfig.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'thumbnails')));
app.use(routes);

app.listen(apiConfig.port, () => {
  console.info('Server is running');
});
