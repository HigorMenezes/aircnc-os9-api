const express = require('express');
const multer = require('multer');

const { multerConfig } = require('./config');

const {
  SessionController,
  SpotController,
  DashboardController,
  BookingController,
} = require('./controllers');

const routes = express.Router();
const upload = multer(multerConfig);

routes.post('/sessions', SessionController.store);

routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);

routes.get('/dashboard', DashboardController.show);

routes.post('/spots/:spot_id/bookings', BookingController.store);

module.exports = routes;
