import express from "express";
import cors from "cors";
const app = express();

// middleWare

app.use(cors());

app.use(express.json());

app.listen(3000, () => {
  console.log("Port is running in 3000");
});
