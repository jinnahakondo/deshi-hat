import mongoose, { Schema } from "mongoose";

const AddressSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    name: String,
    phone: String,
    division: String,
    district: String,
    city: String,
    address: String,
    postalCode: String,
    isDefault: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true })

const Address = mongoose.models.Address || mongoose.model("Address", AddressSchema);
export default Address;