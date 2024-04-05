import express from "express";
import cors from "cors";
const app = express();
import db from "./db.js";

// middleWare
app.use(cors());

app.use(express.json());

//get all

//get specific

//create

//update

//delete

//delete all

app.listen(3000, () => {
  console.log("Port is running in 3000");
});
