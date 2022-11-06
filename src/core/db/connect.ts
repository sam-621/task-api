import mongoose from 'mongoose';

export const connectToDB = async (uri: string) => {
  try {
    await mongoose.connect(uri);
    console.log('DB connected');
  } catch (error) {
    console.log(error);
    throw new Error('DB connection was wrong');
  }
};
