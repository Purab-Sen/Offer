import mongoose from "mongoose";

const uniqueCategorySchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
      unique: true, // Ensures unique category names
    },
  },
  { timestamps: true }
);

const UniqueCategory = mongoose.model("UniqueCategory", uniqueCategorySchema);
export default UniqueCategory;
