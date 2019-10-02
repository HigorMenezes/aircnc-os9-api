require('dotenv').config();

const apiConfig = require('./apiConfig');
const databaseConfig = require('./databaseConfig');
const multerConfig = require('./multerConfig');

module.exports = {
  apiConfig,
  databaseConfig,
  multerConfig,
};
