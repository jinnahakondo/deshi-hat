import mongoose from "mongoose";
import bcrypt from "bcryptjs"

const userSchema = new mongoose.Schema(
    {
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        name: { type: String, required: true },
        role: {
            type: String, enum: ["user", "admin"],
            default: "user"
        },
        image: { type: String },
    },
    { timestamps: true }
);

userSchema.pre("save", async function () {
    if (!this.isModified) return
    this.password = await bcrypt.hash(this.password, 10);
})

export const User = mongoose.models.User || mongoose.model("User", userSchema);