const express = require('express');
const router = express.Router()
const {getBlog, createBlog, updateBlog, deleteBlog} = require('../controllers/blogController')

router.route('/').get(getBlog).post(createBlog)
router.route('/:id').delete(deleteBlog).put(updateBlog)

module.exports = router