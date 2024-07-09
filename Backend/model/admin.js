const db = require('./db');

const AdminSchema = db.Schema
  ({
    name: {
      type: String,
      required: [true, "name not provided "],
    },
    email: {
      type: String,
      unique: [true, "email already exists in database!"],
      lowercase: true,
      trim: true,
      required: [true, "email not provided"],
      validate: {
        validator: function (v) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
        },
        message: '{VALUE} is not a valid email!'
      }

    },
    password: {
      type: String,
      required: [true, "password not provided "],
    },
  })


var adminModel = db.model("admin", AdminSchema)


module.exports = adminModel


