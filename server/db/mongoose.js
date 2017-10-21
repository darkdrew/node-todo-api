const mongoose = require('mongoose');

// configuring mongoose to use Promise
mongoose.Promise = global.Promise;
// Using mongoose to connect to database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/FinalToDoApp');

module.exports = {
  mongoose
}
