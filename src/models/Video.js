import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String },
    url: { type: String },
    thumbnail: { type: String },
    duration: { type: Number }, // In Sekunden
    resolution: { type: String }, // z. B. "1920x1080"
    aspectRatio: { type: String }, // z. B. "16:9" oder "9:16"
    type: { type: String },
    longOrShort: { type: String },
    visibility: { type: String, enum: [ 'draft', 'public', 'private', 'unlisted', 'schedule' ], default: 'draft' },
    scheduleTime: { type: String },
    restriction: { type: String, enum: [ 'None', 'Made For Kids' ] },
    isAdultContent: { type: Boolean },
    views: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

}, { timestamps: true });

export default mongoose.models.Video || mongoose.model('Video', VideoSchema);