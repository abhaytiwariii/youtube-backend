import connectDB from "./database/index.js";

import dotenv from "dotenv";
// require("dotenv").config({ path: "./env" });

dotenv.config();

connectDB();

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

// import express from "express";
// import "dotenv/config";

// const app = express();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONG0DB_URI}/${DB_NAME}`);

//     app.on("error", (error) => {
//       console.log("Error: ", error);
//       throw error;
//     }); // Use to show error if app is unable to connect to DB

//     app.listen(process.env.PORT, () => {
//       console.log(`Your app is running on Port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.log("ERROR: ", error);
//     throw error;
//   }
// })();
