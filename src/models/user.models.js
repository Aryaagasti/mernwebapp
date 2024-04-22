const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true // Ensure unique email addresses
  },
  phone: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

// Pre-save middleware to hash password before saving
userSchema.pre("save", async function (next) {
   const user = this
   if(user.isModified('password')){
    next()

   }
   try {
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(user.password, salt)
    user.password = hashPassword

   } catch (error) {
    next(err)
   }
});

// Method to compare a plain text password with the hashed password in the database

// Method to generate a JSON Web Token (JWT)
userSchema.methods.generateToken = async function () {
  try {
    const payload = {
      userId: this._id.toString(),
      email: this.email,
      isAdmin: this.isAdmin
    };
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "30d" });
  } catch (error) {
    console.error(error);
    throw error; // Re-throw the error for handling elsewhere
  }
};

const User = mongoose.model("user", userSchema);
module.exports = User;
