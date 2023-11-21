import mongoose from 'mongoose';
require('dotenv').config();
mongoose.set('strictQuery', true);

let database: mongoose.Connection | null = null;
const prod = process.env.NODE_ENV === 'production';
const DB_URL = prod ? process.env.DB_URL! : process.env.DB_URL!;

export const connectDB = async () => {
    const conn = await mongoose.connect(DB_URL);
    database = conn.connection;
    return database;
};
