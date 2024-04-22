const errorMiddleware = (err,req,res, next)=>{
    const status = err.status || 500;
    const message = err.message || "BACKEND ERROR"
    const extraDetails = err.extraDetails || "Erorr from backend"

    return res.status(status).json({
        status,
        message,
        extraDetails
    })
}


module.exports = errorMiddleware