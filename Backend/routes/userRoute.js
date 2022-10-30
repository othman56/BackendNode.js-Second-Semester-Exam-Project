const express = require('express')
const userRoute = express.Router

userRoute.post('/', (req,res) => {
    const newUser = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        passwored: req.body.passwored
    }
})