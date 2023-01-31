import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export const connectToDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.48rg9v1.mongodb.net/devBookDB`;
        await mongoose.connect(url);

        console.log('connection to DB is established');
    } catch (error) { 
        
    }
}