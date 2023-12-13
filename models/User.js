const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  gender: {
    type: [String],
    required: true,
    enum: ["male", "female"]
  },
  showSameGender: {
    type: Boolean,
    required: true,
    default: true
  },
  lastLogin: {
    type: Date
  },
  inAppCurrencyBalance: {
    type: Number,
    default: 0
  }
},
  {
    timestamps: true
  });

module.exports = model("User", userSchema);