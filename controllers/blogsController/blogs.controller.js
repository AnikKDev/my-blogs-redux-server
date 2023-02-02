const express = require("express");
const {
  getAllBlogsServices,
  createBlogServices,
} = require("../../services/blogServices/blogs.services");

exports.getAllBlogs = async (req, res, next) => {
  try {
    const allBlogs = await getAllBlogsServices({});
    console.log(allBlogs);
    res.status(200).json(allBlogs);
  } catch (err) {
    console.error("error");
    res.status(500).json(err.message);
  }
};

// creating blog
exports.createBlog = async (req, res, next) => {
  try {
    // console.log(req.body);
    const newBlog = await createBlogServices(req.body);
    res.status(201).send({
      success: true,
      data: newBlog,
    });
  } catch (err) {
    res.status(500).json(err);
  }
};
