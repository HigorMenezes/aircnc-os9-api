/**
 * index: list all
 * show: list one
 * store: create
 * update: update
 * destroy: destroy
 */

const { User } = require('../models');

module.exports = {
  async store(req, res) {
    const { email } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ email });
    }

    return res.json(user);
  },
};
