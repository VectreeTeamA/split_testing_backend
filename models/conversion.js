let mongoose = require('mongoose');


let conversionSchema = new mongoose.Schema({
  owner:{
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    ownerName: String
  },
  conversion: [],
  time: String
});


module.exports = mongoose.model('Conversion', conversionSchema);
