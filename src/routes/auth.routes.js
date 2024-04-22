const express = require("express")
const router = express.Router()
const authControllers =  require("../controllers/auth.controller.js")
const validate = require("../middlewares/validate.middleware.js")
const signupSchema = require("../../validators/auth.validator.js")

// router.get("/",(req,res)=>{
//     res.status(200).send("welcom to best website ever using router")
// })

router.route('/').get(authControllers.home)

router.route('/register').post( validate(signupSchema), authControllers.register)
router.route('/login').post(validate(signupSchema.loginSchema) ,authControllers.login)
router.route('/user').post(authControllers.user)




module.exports= router