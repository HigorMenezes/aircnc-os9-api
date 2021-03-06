const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema(
  {
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);

SpotSchema.virtual('thumbnailUrl').get(function getThumbnailUrl() {
  return `http://192.168.0.113:3333/files/${this.thumbnail}`;
});

module.exports = mongoose.model('Spot', SpotSchema);
