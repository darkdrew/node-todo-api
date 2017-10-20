const mongoose = require('mongoose');

// User email - require it - trim it - set type -set min length 1
const Users = mongoose.model('user', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
});

module.exports = {
  Users
}
