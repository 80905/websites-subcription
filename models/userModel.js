const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A User must have a name!!'],
    trim: true,
    minlength: [2, 'A user  name must have at least 2 characters!!'],
    maxlength: [25, 'A user  name can contains maximusm 25 characters!!'],
  },
  email: {
    type: String,
    required: [true, 'A user must have a email id!!'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email id!'],
  },
  password: {
    type: String,
    required: [true, 'A user must have a password!!'],
    minlength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'A user must have a passwordConfirm!!'],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: 'Passwords are not same!!',
    },
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
  },
  createdAT: {
    type: Date,
    default: Date.now(),
  },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
