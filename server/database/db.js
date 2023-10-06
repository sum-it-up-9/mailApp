import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();


const USERNAME = 'sumitadsul9';
const PASSWORD = 'DBSojsfFDpT57oC5'; 

const Connection = () => {
    const DB_URI = `mongodb://${USERNAME}:${PASSWORD}@ac-slvjufh-shard-00-00.ejrgjas.mongodb.net:27017,ac-slvjufh-shard-00-01.ejrgjas.mongodb.net:27017,ac-slvjufh-shard-00-02.ejrgjas.mongodb.net:27017/?ssl=true&replicaSet=atlas-qgs623-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        mongoose.connect(DB_URI, { useNewUrlParser: true });
        mongoose.set('strictQuery', false);
        console.log('Database connected sucessfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message)
    }
}

export default Connection;