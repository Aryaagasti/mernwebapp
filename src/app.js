const express = require("express")
const app = express()
const authrouter = require("../src/routes/auth.routes.js")
const contactrouter = require("../src/routes/contact.routes.js")
const servicerouter = require("../src/routes/service.routes.js")
const adminrouter = require("../src/routes/admin.routes.js")
const errorMiddleware = require("./middlewares/error.middleware.js")



app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use("/api/auth", authrouter)
app.use("/api/form", contactrouter)
app.use("/api/data", servicerouter)
app.use("/api/admin", adminrouter)


app.use(errorMiddleware)


// app.get("/",(req,res)=>{
//     res.status(200).send("welcom to best website ever")
// })

app.get("/register",(req,res)=>{
    res.status(200).send("welcom to registeration page")
})

module.exports = app
