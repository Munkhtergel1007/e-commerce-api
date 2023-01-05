const mongoose = require("mongoose");

const connectDB = async () => {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(process.env.DB_URI);

    console.log(`🚀 MongoDB connected: ${conn.connection.host}`);
};

module.exports = connectDB;
