const mongoose = require('mongoose')

const blogSchema = mongoose.schema({
    title:{type:String,required: true},
    description:String,
    body:{string, required:true},
    author:string,
    state: {string, enum:['DRAFT', 'PUBLISHED'],
    default:'DRAFT'},
    read_count:Number,
    read_time:{type:Date, default:Date.now},
    tags:[javaScript, React, mongoDatabase,]
},
{timestamps: true},)
         
module.exports = mongoose.model('Blog', 'blogSchema')