import mongoose from 'mongoose';
const postSchema = new mongoose.Schema({
  category:{
    type : String,
    required : true,
  },
  description:{
    type : String,
    required : true,
  },
  url:{
    type: [String],
    required : true,
  },
  tags:{
    type: [String],
  },

},{timestamps:true})

const Post = mongoose.model('Post',postSchema);
export default Post;
