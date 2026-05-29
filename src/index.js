import { app } from "./app.js";
import connectDB from "./database/index.js";

import dotenv from "dotenv";
// require("dotenv").config({ path: "./env" });

dotenv.config();

connectDB()
  .then(() => {
    app.on("Error", (err) => {
      console.log("Failed to connect app with DB !!!", err);
      throw err;
    });
    
    app.listen(process.env.PORT || 4000, () => {
      console.log(`Your app is running at Port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO DB connection failed !!!", err);
  });

//2nd method

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
