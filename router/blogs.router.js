const {
  getAllBlogs,
  createBlog,
} = require("../controllers/blogsController/blogs.controller");
const router = require("express").Router();
// middlewares will be here

// using routes
router.route("/all-blogs").get(getAllBlogs).post(createBlog);
module.exports = router;
