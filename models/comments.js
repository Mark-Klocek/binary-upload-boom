import mongoose from 'mongoose'

const CommentSchema = new mongoose.Schema({
  commentText: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    require: true,
  },
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  postID: {
    type: mongoose.Schema.Types.ObjectId
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", PostSchema);
