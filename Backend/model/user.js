const db=require('./db');

const UserSchema = db.Schema
({
    username:{
        type: String,
        required: [true, "fullname not provided "],
      },
    email:{
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
    password:String,
})


var userModel=db.model("user",UserSchema)


module.exports = userModel


