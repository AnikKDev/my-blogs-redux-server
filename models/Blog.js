const mongoose = require("mongoose");
const { Schema } = mongoose;
// schema designing
const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: { type: String, required: true },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    tags: [
      {
        type: String,
        required: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);
// creating a model instance
const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
