const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is Required"],
    maxLength: [30, "Name must be less than 30 characters"],
    trim: true,
  },
});
