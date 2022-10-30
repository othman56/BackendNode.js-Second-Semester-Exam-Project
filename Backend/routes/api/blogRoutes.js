const express = require('express')
const route = express.Router()
const blogs = require('../../../Blogs')

// getting all blogs
route.get('/', (req,res) => res.json(Blogs))

// creating a new blog
route.post ('/', (req,res) => {
    const newBlog = {
        id :1,
        title : req.body.title,
        description: req.body.description,
        author: req.body.author,
        state: req.body.state,
        Read_count: req.body.read_count,
        Read_time: Date(),
        Body: req.body.body,
    }

    if(!newBlog.title) {
        res.status(400).json({message: 'please this fiels are required'})
    } else{
        blogs.push(newBlog)
        res.json(blogs)
    }
})

module.exports = route