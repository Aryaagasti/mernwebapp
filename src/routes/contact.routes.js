const express = require("express")
const router = express.Router()
const contactForm = require("../controllers/contact.controller.js")

router.route("/contact").post(contactForm)



module.exports = router;