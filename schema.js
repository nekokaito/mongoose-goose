const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, maxLength: 20 },
  age: {
    type: Number,
    min: 1,
    max: 40,
    validate: {
      validator: (v) => v % 2 === 0,
      message: (props) => `${props.value} is not even`,
    },
  },
  email: { type: String, required: true, lowercase: true },
  createdAt: { type: Date, default: () => Date.now() },
  updatedAt: { type: Date, default: () => Date.now() },
  wife: mongoose.SchemaTypes.ObjectId,
  skills: [String],
  address: {
    street: String,
    city: String,
  },
});
module.exports = mongoose.model("User Info", userSchema);
