const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModels')

// description =  create new user
// method = POST api/users
const signupUser = asyncHandler(async (req,res) => {

    const {firstName,lastName,email,password} = req.body

    if (!firstName || !lastName || !email || !password) {
        res.status(400)
        throw new Error ('please add all fields')
    }
    // check if user exists
    const userExist = await User.findOne({email})
    if(userExist) {
        res.status
        throw new Error('user already exista')
    }

    // hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword =  await bcrypt.hash(password, salt)

    const user = await User.create({
        firstName,
        lastName,
        email,
        password:hashedPassword
    })

    if(user) {
        res.status(201).json({
            _id: user.id,
            firstName: user.firstName,
            lastName:user.lastName,
            email: user.email
        })
    } else{
        res.status(400)
        throw new Error ('invalid user data')
    }
})

// description =  authenticate user
// method = POST api/users/login
const loginUser = asyncHandler(async (req,res) => {
    res.json({message: 'login user successful'})
})

// description  = get user
// method = Get api/users/user
const getUser = asyncHandler(async (req,res) => {
    res.json({message: 'user data'})
})

module.exports = {signupUser, loginUser, getUser}





// const userModel = require('../models/userModels')
// const jwt = require('jsonwebtoken')

// const getToken = (user) => {
//     jwt.sign(user,process.env.JWT_SECRET, {expiresIn: JWT_EXPIREY_TIME})
//     return token
// }
// // signup users
// exports.signup = (req,res,next) => {
//     try {
        
//         const {firstName,lastName,email,password} =  req.body
//         const user = await userModel.create({firstName,lastName,email,password})
        
//         user.password = undefined
//         const token = getToken(user)
//         return res.status(201).json({"status": 'success',token, data: {user}})
//     } catch (error) {
//         return next(error)
//     }
// }

// // signin users
// exports.signin = (req,res,next) => {
//     try {
//         const {username,password }
//     }
// }