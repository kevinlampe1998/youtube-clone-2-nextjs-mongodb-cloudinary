import mongoose from "mongoose";

const birthDateSchema = new mongoose.Schema({
    month: { type: String, required: true },
    day: { type: Number, required: true },
    year: { type: Number, required: true }
}, { timestamps: true });

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String },
    birthDate: { type: birthDateSchema, required: true },
    gender: { type: String, required: true },
    emailAddress: { type: String, required: true },
    password: { type: String, required: true },
}, { timestamps: true });

export default mongoose.models.User || mongoose.model('User', userSchema);