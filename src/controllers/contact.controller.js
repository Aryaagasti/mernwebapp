const contact = require("../models/contact.models");


const contactForm = async (req, res) => {
    try {
        const { username, email, message } = req.body; // Destructure data from req.body
        await contact.create({ username, email, message }); // Create new contact using Mongoose model

        return res.status(200).json({ msg: "Message sent successfully" }); // Corrected success message
    } catch (err) {
        return res.status(500).json({ msg: "Message not delivered" });
    }
};




module.exports = contactForm