const db = require('./db');

const ProductSchema = db.Schema
  ({
    name: {
      type: String,
      required: [true, "name not provided "],
    },
    description: {
      type: String
    },
    price: {
      type: Number,
    },
    type: {
      type: String,
    },
    image: {
      type: String,
    }
  })


var productModel = db.model("product", ProductSchema)


module.exports = productModel


