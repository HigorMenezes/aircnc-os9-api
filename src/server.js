const express = require('express');
const { appConfig } = require('./config');

const app = express();

app.get('/', (req, res) => res.json({ message: 'Hello World' }));

app.listen(appConfig.port, () => {
  console.info('Server is running');
});
