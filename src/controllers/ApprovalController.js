const Booking = require('../models/Booking');

module.exports = {
  async update(req, res) {
    const { booking_id: bookingId } = req.params;
    const booking = await Booking.findById(bookingId).populate('spot');

    booking.approved = true;
    booking.save();

    const bookingUserSocket = req.connectedUsers[booking.user];

    if (bookingUserSocket) {
      req.io.to(bookingUserSocket).emit('booking_response', booking);
    }

    return res.json(booking);
  },
};
