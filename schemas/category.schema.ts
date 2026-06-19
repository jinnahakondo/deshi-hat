import mongoose, { Schema } from "mongoose";
import { generateSlug } from "@/lib/helperFunction";

const categorySchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        slug: {
            type: String,
            unique: true,
        },

        image: String,
    },
    {
        timestamps: true,
    }
);

categorySchema.pre("save", async function () {
    if (!this.isModified("name")) return
    this.slug = generateSlug(this.name)
})

const Category = mongoose.models.Category || mongoose.model("Category", categorySchema)

export default Category;