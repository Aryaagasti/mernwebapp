const mongoose = require("mongoose");


const contactSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
}, { timestamps: true });


const contact = mongoose.model("contact", contactSchema)
module.exports = contact