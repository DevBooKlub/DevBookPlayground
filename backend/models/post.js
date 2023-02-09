import mongoose, { Schema } from "mongoose";


const postSchema = mongoose.Schema(
  {
    userId: {
      type: Schema.Types.ObjectId, 
      ref: "User",
      required: true,
    },
    username: {
      type: String,
      // required: true,
    },
    desc: String,
    picturePath: String,
    userPic: String,
    likes: {
      type: Map,
      of: Boolean,
    },
    comments: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

postSchema.pre(/^find/, function(next){
  this.populate({path: "userId"})
})
const Post = mongoose.model("Post", postSchema);

export default Post;
