const mongoose = require("mongoose");
const { productSchema } = require("./product");
const userSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    validate: {
      validator: (value) => {
        console.log(value);
        const re =
          /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
        return value.match(re);
      },
      message: "please enter a valid ",
    },
  },
  password: {
    type: String,
    trim: true,
    validate: {
      validator: (value) => {
        return value.length > 6;
      },
      message: "please enter a valid passwprd",
    },
  },
  address: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "user",
  },
  cart: [
    {
      product: productSchema,
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
});

module.exports = user = mongoose.model("User", userSchema);
