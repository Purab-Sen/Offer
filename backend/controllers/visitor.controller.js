
const Post = require('../models/post.model.js');

const getAllCategories = async(req, res, next) => {
  try{
    const categories = await Post.find().distinct('category');
    res.status(200).json({success:true,data:categories});
  }catch(err){
    console.error("Error fetching categories:",error);
    res.status(500).json({success:false,message:"Internal Server Error"});
  }
};

module.exports = {getAllCategories};