const mongoose = require('mongoose');

const subPlatformSchema = new mongoose.Schema({
  webName: {
    type: String,
    unique: true,
    trim: true,
    required: [true, 'A website must have a name!!'],
    maxlength: [25, 'A website name must have less than or equal to 25 characters!!'],
    minlength: [5, 'A website name must have more than or equal to 2 characters!!'],
  },
  webType: {
    type: String,
    trim: true,
    required: [true, 'A website must have a type!!'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const SubPlatform = mongoose.model(' SubPlatform', subPlatformSchema);
module.exports = SubPlatform;
