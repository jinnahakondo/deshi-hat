import mongoose, { Schema } from "mongoose";
import slugify from 'slugify';
import crypto from 'crypto'

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
    
    const baseSlug = slugify(this.name, {
        lower: true,
        strict: true,
        trim: true
    })

    const uniqueId = crypto.randomBytes(2).toString('hex');

    this.slug = `${baseSlug}-${uniqueId}`
})

const Category = mongoose.models.Category || mongoose.model("Category", categorySchema)

export default Category;