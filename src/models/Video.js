const VideoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    url: { type: String, required: true },
    thumbnail: { type: String, required: true },
    duration: { type: Number, required: true }, // In Sekunden
    resolution: { type: String, required: true }, // z. B. "1920x1080"
    aspectRatio: { type: String, required: true }, // z. B. "16:9" oder "9:16"
    type: { type: String, enum: ["long", "short"], required: true },
    views: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    createdAt: { type: Date, default: Date.now }
});