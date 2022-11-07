const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref: 'User'
    },
    title: {
        type:String,
        required: true,
        unique:true
    },
    description:{
        type:String,
    },
    tags:['javaScript','Node.js','React','Vue.js'],
    author:{
        type:String,
        unique:true,
    },
    body:{
        type: String,
        required:true,
    },
    Read_Time:Date,
})

module.exports = mongoose.model('Blog', blogSchema)