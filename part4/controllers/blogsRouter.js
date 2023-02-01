
const blogsRouter = require('express').Router()
const Blog = require('../models/bloglist')



blogsRouter.get('/api/blogs', (request, response) => {
  Blog
    .find({})
    .then(blogs => {
      console.log(blogs)
      response.json(blogs)
    })
})
  
blogsRouter.post('/api/blogs', (request, response) => {
  //
  const body = new Blog(request.body)
  console.log(body)
    
  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes
  })
    
  
  blog
    .save()
    .then(result => {
      response.status(201).json(result)
    })
})

module.exports = blogsRouter