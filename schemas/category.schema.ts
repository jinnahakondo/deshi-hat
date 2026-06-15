import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },

        slug: {
            type: String,
            required: true,
            unique: true,
        },

        image: String,
    },
    {
        timestamps: true,
    }
);

const Catetory = mongoose.models.Category || mongoose.model("Category", categorySchema)

export default Catetory;