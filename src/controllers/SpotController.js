const { Spot, User } = require('../models');

module.exports = {
  async index(req, res) {
    const { tech } = req.query;
    const spots = await Spot.find({ techs: tech });
    return res.json({ spots });
  },
  async store(req, res) {
    const { filename } = req.file;
    const { company, techs, price } = req.body;
    const { user_id: userId } = req.headers;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(400).json({ message: 'User does not exists' });
    }

    const spot = await Spot.create({
      user,
      thumbnail: filename,
      company,
      techs: techs.split(',').map(tech => tech.trim()),
      price,
    });

    return res.json(spot);
  },
};
