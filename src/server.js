const express = require('express');
const mongoose = require('mongoose');
const { apiConfig, databaseConfig } = require('./config');
const routes = require('./routes');

const app = express();
mongoose.connect(databaseConfig.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use(express.json());
app.use(routes);

app.listen(apiConfig.port, () => {
  console.info('Server is running');
});
