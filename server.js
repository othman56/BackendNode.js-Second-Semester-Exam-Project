const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const connectDb = require('./config/dbconfig')
const colors = require('colors')
const {errorHandler } = require('./middleware/errorHandler')

connectDb()
const app = express()

app.use((express.json()))
app.use(express.urlencoded({extended: false}))


app.use('/api/blogs', require('./routes/blogRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)
// app.use('/api/blogs', require('./routes/api/blogRoutes'))

app.listen(port, () => console.log(`server started on ${port}`))