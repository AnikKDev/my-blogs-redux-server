const Blog = require("../../models/Blog");

exports.getAllBlogsServices = async () => {
  return console.log("getAllBlogsServices");
};

// create blog service
exports.createBlogServices = async (blogData) => {
  //   console.log(blogData);
  const { title, content, author, tags } = blogData;
  const createdeBlog = await Blog.create(blogData);
  console.log("hello from blog service");
  return createdeBlog;
};
