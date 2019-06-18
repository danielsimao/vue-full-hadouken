const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  text: { type: String, require: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = Post = mongoose.model("post", PostSchema);
