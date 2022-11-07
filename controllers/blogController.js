const asyncHandler = require('express-async-handler')
const Blog = require('../models/blogModels')

// @description of function   get blogs
// @route Get /api/blogs
// @access private  
const getBlog = asyncHandler(async(req,res) => {
const blogs = await Blog.find()

    res.status(200).json(blogs)
})

// @description of function Create blogs
// @route POST /api/blogs
// @access public  
const createBlog = asyncHandler(async(req,res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error ('please add all required text field')
    }

    const blog = await Blog.create({
        text: req.body.text
    })
    res.status(200).json({ blog})
})

// @description of function update blogs
// @route Update /api/blogs/id
// @access private  
const updateBlog = asyncHandler(async(req,res) => {
    const blog = await Blog.findById(req.params.id)

    if(!Blog) {
        res.status(400)
        throw new Error ('Blog not found')
    }

    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id,req.body, {new: true})

    res.status(200).json(updatedBlog)
})

// @description of function   deletd Blogs
// @route delete /api/Blogs/is
// @access private  
const deleteBlog = asyncHandler(async(req,res) => {

    const blog = await Blog.findById(req.params.id)
    if(!Blog) {
        res.status(400)
        throw new Error ('Blog not found')
    }

     await Blog.remove()

    res.status(200).json({id: req.params.id})
})
module.exports = {getBlog, createBlog, updateBlog,deleteBlog}