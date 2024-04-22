const User = require('../models/user.models.js')
const Contact = require ('../models/contact.models.js')
const getAllUsers = async(req,res,next)=>{
try {
    const users = await User.find({},{password: 0});
    if(!users || users.lenght === 0){
        return res.status(404).json({msg : "No users found"})
    }
    res.status(200).json(users)
} catch (error) {
    next(error)
}
}

const getAllContacts = async(req,res)=>{
    try {
        const contacts = await Contact.find()
        if(!contacts || contacts.length === 0){
            return res.status(404).json({msg: "No contacts found"})
        }
        return res.status(200).json(contacts)
    } catch (error) {
        return res.status(500).json({msg: "server error"})
    }
}

const deleteUser = async (req, res) => {
    const userId = req.params.userId;
    try {
      const deletedUser = await User.findByIdAndDelete(userId);
      if (!deletedUser) {
        return res.status(404).json({ msg: "User not found" });
      }
      return res.status(200).json({ msg: "User deleted successfully" });
    } catch (error) {
      return res.status(500).json({ msg: "Server error" });
    }
  };

module.exports = {
    getAllUsers,
    getAllContacts,
    deleteUser
}