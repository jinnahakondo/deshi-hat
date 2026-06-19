import mongoose, { Schema } from "mongoose";
import slugify from "slugify"
import crypto from "crypto"



const productSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        slug: {
            type: String,
            unique: true
        },

        description: {
            type: String,
            required: true,
        },

        images: [String],

        price: {
            type: Number,
            required: true,
        },

        discountPrice: Number,

        stock: {
            type: Number,
            default: 0,
        },

        brand: String,

        category: {
            type: Schema.Types.ObjectId,
            ref: "Category",
        },

        averageRating: {
            type: Number,
            default: 0,
        },

        totalReviews: {
            type: Number,
            default: 0,
        },

        createdBy: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    },
    {
        timestamps: true,
    }
);

productSchema.pre("save", async function () {
    if (!this.isModified("title")) return

    const baseSlug = slugify(this.title, {
        lower: true,
        strict: true,
        trim: true
    })

    const uniqueId = crypto.randomBytes(2).toString('hex');

    this.slug = `${baseSlug}-${uniqueId}`
})

const Product =
    mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;