const mongoose = require("mongoose");

const docSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // file original name
  },
  link: {
    type: String,
    required: true, // path like /uploads/12345.pdf
  },
  date: {
    type: Date,
    default: Date.now, // auto sets to current timestamp
  },
});

const Document = mongoose.model("Document", docSchema);

module.exports = Document;
