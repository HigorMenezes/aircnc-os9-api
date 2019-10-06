const { Booking } = require('../models');

module.exports = {
  async store(req, res) {
    const { user_id: userId } = req.headers;
    const { spot_id: spotId } = req.params;
    const { date } = req.body;

    const booking = await Booking.create({
      user: userId,
      spot: spotId,
      date,
    });

    await booking
      .populate('spot')
      .populate('user')
      .execPopulate();

    const ownerSocket = req.connectedUsers[booking.spot.user];
    if (ownerSocket) {
      req.io.to(ownerSocket).emit('booking_request', booking);
    }

    return res.json(booking);
  },
};
