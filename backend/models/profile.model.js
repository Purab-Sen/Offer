import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema(
    {
        businessName: {
            type: String,
            required: true,
            uniquie: true
        },
        profileImageUrl:{
            type: String,
            required: false,
            default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        },
        location: {
            type: String,
            required: false
        },
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        posts: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Post"
            }
        ]
        
    }
)

const Post = mongoose.model('Post', userSchema);
export default Post;