import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const mongoURL = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/nuna_coffee_shop';
    
    await mongoose.connect(mongoURL);
    
    console.log('✓ MongoDB connected successfully');
  } catch (error) {
    console.error('✗ MongoDB connection error:', error);
    process.exit(1);
  }
};
