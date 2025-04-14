import mongoose from "mongoose";

const connectMongo = async () => {
    try {
        if (mongoose.connection.readyState >= 1) {
            console.log("MONGODB already connected!");
            return;
        }

        console.log("Connecting to MongoDB...");
        console.log("process.env.MONGODB_URI", process.env.MONGODB_URI);

        await mongoose.connect(process.env.MONGODB_URI, {
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
            connectTimeoutMS: 10000,
            maxPoolSize: 10,
            minPoolSize: 2,
            autoIndex: false,
        });

        console.log("Connected to MongoDB!");
    } catch (err) {
        console.error("Error connecting MongoDB:", err);
        console.log("New try in 5 seconds...");
        setTimeout(connectMongo, 5000);
    }
};

if (!global.mongoConnectionHandler) {
    process.on("SIGINT", async () => {
        await mongoose.connection.close();
        console.log("MongoDB-Connection closed. Server will be stopped.");
        process.exit(0);
    });

    process.on("SIGTERM", async () => {
        await mongoose.connection.close();
        console.log("MongoDB-Connection with SIGTERM closed.");
        process.exit(0);
    });

    global.mongoConnectionHandler = true;
}

export default connectMongo;
