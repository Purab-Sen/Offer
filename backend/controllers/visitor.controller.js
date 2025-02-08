
import Post from "../models/post.model.js";
import UniqueCategory from "../models/uniqueCategory.model.js";

export const getTopPostsByCategory = async (req, res) => {
  try {
    // Step 1: Fetch unique categories from the database
    let categories = await UniqueCategory.find().select("category -_id"); 
    categories = categories.map((cat) => cat.category); // Convert to array of strings

    // // If UniqueCategory is empty, dynamically extract categories from Post collection
    // if (categories.length === 0) {
    //   categories = await Post.distinct("category");
    // }

    // Step 2: Fetch top 10 posts for each category
    const postsByCategory = {};
    for (const category of categories) {
      const posts = await Post.find({ category })
        .sort({ createdAt: -1 }) // Sort by latest posts
        .limit(10);
      postsByCategory[category] = posts;
    }

    // Step 3: Return response
    res.status(200).json({ success: true, data: postsByCategory });
  } catch (error) {
    console.error("Error fetching posts by category:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
