const User = require("../models/user.models");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
  try {
    res.status(200).send("Welcome to the best website ever using router");
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server Error" });
  }
};

const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ msg: "Email already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const createUser = await User.create({
      username,
      email,
      phone,
      password: hashPassword // Use the hashed password here
    });

    res.status(200).json({ message: "User created", token: await createUser.generateToken(), userId: createUser._id.toString() });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server Error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    // Compare hashed password
    const isMatch = await bcrypt.compare(password, userExist.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    // Generate token upon successful login
    const token = await userExist.generateToken();

    res.status(200).json({
      msg: "Login Successful",
      token: token,
      userId: userExist._id.toString()
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server Error" });
  }
};

const user = async(req,res)=>{
  try {
    const userData = req.user;
    return res.status(200).json({userData})
  } catch (error) {
    console.log(`error from the user route ${error}`);
  }
}

module.exports = {
  home,
  register,
  login,
  user
};
