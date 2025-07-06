const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://databaseuser:database123@cluster0.ebq8k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

const userSchema = new mongoose.Schema({
  username: String,
  name: String,
  email: String,
  password: String,
  profilePic: String,
  date: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('User', userSchema);

module.exports = mongoose.model('User');