const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://databaseuser:database123@cluster0.ebq8k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

const notesSchema = new mongoose.Schema({
  title: String,
  description: String,
  content: String,
  isImportant: Boolean,
  uploadedBy: String,
  date:{
    type: Date,
    default: Date.now
  }
});

mongoose.model("Notes", notesSchema);

module.exports = mongoose.model("Notes")