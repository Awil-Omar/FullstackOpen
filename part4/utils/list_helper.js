const dummy = (blogs) => {
  return 1
}
const totalLikes = (blogs) => {
    return blogs.reduce((sum, blog) => {
        return sum + blog.likes
    }, 0)

}
const favoriteBlog = (blogs) => {

  return blogs.reduce((max, blog) => {
    return max.likes > blog.likes ? max : blog
  }, 0)
}
const mostBlogs = (blogs) => {
  const authors = blogs.map(blog => blog.author)
  console.log(authors.length)

  const uniqueAuthors = [...new Set(authors)]
  console.log(uniqueAuthors.length)

  const blogsPerAuthor = uniqueAuthors.map(author => {
    return {
      author,
      blogs: authors.filter(a => a === author).length
    }
  })
  return blogsPerAuthor.reduce((max, blog) => {
    return max.blogs > blog.blogs ? max : blog
  }, 0)
}


  
module.exports = {
  dummy, totalLikes, favoriteBlog, mostBlogs
}