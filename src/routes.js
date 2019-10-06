const express = require('express');
const multer = require('multer');

const { multerConfig } = require('./config');

const {
  SessionController,
  SpotController,
  DashboardController,
  BookingController,
  ApprovalController,
  RejectionController,
} = require('./controllers');

const routes = express.Router();
const upload = multer(multerConfig);

routes.post('/sessions', SessionController.store);

routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);

routes.get('/dashboard', DashboardController.show);

routes.post('/spots/:spot_id/bookings', BookingController.store);

routes.put('/bookings/:booking_id/approvals', ApprovalController.update);
routes.put('/bookings/:booking_id/rejections', RejectionController.update);

module.exports = routes;
