import express from "express";
import cors from "cors";
const app = express();
import db from "./db.js";

// middleWare
app.use(cors());

app.use(express.json());

//get all
app.get("/todo", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM todo");
    res.json(result.rows);
  } catch (error) {
    console.log(error);
  }
});

//get specific
app.get("/todo/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const result = await db.query("SELECT * FROM todo WHERE todo_id = $1", [
      id,
    ]);
    res.json(result.rows[0]);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});
//create
app.post("/todos", async (req, res) => {
  const description = req.body.description;
  console.log(description);
  try {
    const result = await db.query(
      "INSERT INTO todo (description) VALUES ($1) RETURNING *",
      [description]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.log(error);
  }
});

//update
app.put("/todo/:id", async (req, res) => {
  const id = req.params.id;
  const description = req.body.description;
  try {
    const result = await db.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2 RETURNING *",
      [description, id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.log(error);
  }
});

//delete
app.delete("/todo/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const result = await db.query("DELETE FROM todo WHERE todo_id = $1", [id]);
    res.json("deleted");
  } catch (error) {
    console.log(error);
  }
});
//delete all
app.delete("/all", async (req, res) => {
  try {
    const result = await db.query("DELETE FROM todo");
    res.json("Deleted all");
  } catch (error) {
    console.log(error);
  }
});

app.listen(3000, () => {
  console.log("Port is running in 3000");
});
