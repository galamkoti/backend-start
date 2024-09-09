const mongoose = require('mongoose');

// Replace 'mongodb://localhost:27017/mydatabase' with your MongoDB URI


const connectDB = async (MONGO_URI) => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB connected successful');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
