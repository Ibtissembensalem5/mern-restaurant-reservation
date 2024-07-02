import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "RESTAURANT",
    })
    .then(() => {
        console.log("CONNECTED TO DATABASE SUCCESSFULLY");
    })
    .catch(err => {
        console.log(`Some error occurred while connecting to the database: ${err}`);
    });
};

export default dbConnection;
