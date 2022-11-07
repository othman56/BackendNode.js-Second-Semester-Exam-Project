const mongoose = require('mongoose')
const bcrypt = require('bcryptjs') 

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        trim:true,
        required:[true, 'please provide a firstName'],
    },
    lastName: {
        type: String,
        trim:true,
        required:[true, 'please provide a lastName'],
    },
    email: {
        type: String,
        trim:true,
        unique:true,
        required:[true, 'please provide a working email address'],
    },
    password:{
        type: String,
        minLength:6,
        trim:true,
        required:[true, 'please add a password']
    }
})

module.exports = mongoose.model('User', userSchema)






// userSchema.pre('save', async function (next) {
//     const hashedPassword = await bcrypt.hash(this.password,10);
//     this.password = hashedPassword;
//     next()
// })

// userSchema.method.inCorrectPassword = async function(inputtedPassword) {
//     const inputtedPassword = await bcrypt.compare(inputtedPassword,
//      this.password);
//     return inCorrectPassword;
// }
// module.exports = mongoose.model('User', userSchema)
