const {z} = require("zod")


const signupSchema =z.object({
    username: z.string().min(3).max(50).nonempty(),
  email: z.string().email(),
  phone: z.string().min(10).max(15).regex(/^\+?[0-9]+$/),
  password: z.string().min(6),

    
})

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

module.exports ={
  signupSchema,
  loginSchema
}