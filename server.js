const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const Blogs = require('./Blogs')
const routes = require('./Backend/routes/api/blogRoutes')
const connectDb = require('./config/dbconfig')
const colors = require('colors')
connectDb()

const app = express()

app.use((express.json()))
app.use(express.urlencoded({extended: false}))

app.use('/api/blogs', require('./Backend/routes/api/blogRoutes'))

app.listen(port, () => console.log(`server started on ${port}`))