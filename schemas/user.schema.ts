import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcryptjs";

interface IUser extends Document {
  name: string;
  email: string;
  password?: string;
  provider: "credentials" | "google";
  role: "user" | "admin";
  image?: string;
  isModified(path: string): boolean;
}

const userSchema = new Schema<IUser>(
  {
    provider: {
      type: String,
      enum: ["credentials", "google"],
      default: "credentials",
    },

    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      select: false,
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },

    image: {
      type: String,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function () {
  if (this.provider !== "credentials") return;
  if (!this.password) return;
  if (!this.isModified("password")) return;

  this.password = await bcrypt.hash(this.password, 10);
});

const User =
  mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User;