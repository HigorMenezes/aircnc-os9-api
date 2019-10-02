const { Spot } = require('../models');

module.exports = {
  async show(req, res) {
    const { user_id: userId } = req.headers;
    const spots = await Spot.find({ user: userId });
    return res.json(spots);
  },
};
