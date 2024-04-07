import React, { useState } from "react";
import api from "../API/api";
const Create = () => {
  const [description, setDescription] = useState("");
  const createChore = async (e) => {
    e.preventDefault();
    await api
      .post("/todos", {
        description: description,
      })
      .then((response) => {
        // console.log(response);
        setDescription("");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="text-center flex justify-center p-4 mt-[190px]">
      <form>
        <input
          className=" border-black border rounded p-2 w-[700px]"
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          onClick={createChore}
          className=" rounded bg-blue-400 p-2 ml-1 w-20"
        >
          POST
        </button>
      </form>
      <a href="/">
        <button className=" bg-red-300 rounded p-2 ml-1 w-20">Home</button>
      </a>
    </div>
  );
};

export default Create;
