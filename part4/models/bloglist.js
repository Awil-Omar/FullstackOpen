const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number
})

const blog = mongoose.model('Blog', blogSchema)

  


blogSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

module.exports = blog,blogSchema
  
  