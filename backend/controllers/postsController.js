import Post from "../models/post.js";
import User from "../models/user.js";

//Create

export const createPost = async (req, res) => {
  try {
    console.log(req.user);
    const { username, _id, userPic=""} = req.user;
    const {  desc, picturePath } = req.body;
    // const user = await User.findById(req.user._id);
    const newPost = new Post({
      userId: _id,
      username,
      desc,
      userPic,
      picturePath,
      likes: {},
      comments: [],
    });

    // await newPost.save();

    // const post = await Post.find();

    res.status(201).json(newPost);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Get Post by USer ID



//Read

//Grabing all the posts from everyone

export const getFeedPosts = async (req, res) => {
  try {
    const post = await Post.find();
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getUserPosts = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
   const post = await Post.findById( id )
    console.log(post);
    res.status(200).json({
      status:'success', post
     
    });
    
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//Update

export const likePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    const post = await Post.findById(id);
    const isLiked = post.likes.get(userId);

    if (isLiked) {
      post.likes.delete(userId);
    } else {
      post.likes.set(userId, true);
    }

    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { likes: post.likes },
      { new: true }
    );

    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
