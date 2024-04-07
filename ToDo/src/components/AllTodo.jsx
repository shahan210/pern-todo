import React, { useEffect, useState } from "react";
import api from "../API/api";
const AllTodo = () => {
  const [Todo, SetTodo] = useState("");
  const [id, setId] = useState("");
  useEffect(() => {
    getAlldata();
  }, []);

  const getSpecific = async (e) => {
    e.preventDefault();
    api.get(`/todo/${id}`).then((response) => {
      // console.log(response);
    });
  };
  const getAlldata = async () => {
    await api
      .get("/todo")
      .then((result) => {
        if (result.length > 0) {
          SetTodo(result);
        } else {
          console.log(result.rows);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="text-center flex justify-center p-4 mt-[190px]">
        <form action="/todo/:id" method="get">
          <input
            className=" border-black border rounded p-2 w-[700px]"
            type="text"
            placeholder="ID"
            onChange={(e) => setId(e.target.value)}
          />
          <button
            onClick={getSpecific}
            className=" rounded bg-blue-400 p-2 ml-1 w-20"
          >
            Search
          </button>
        </form>
        <a href="/create">
          <button className=" rounded bg-green-400 p-2 ml-1 w-20">
            Create
          </button>
        </a>
      </div>
      <div className=" flex justify-center mt-4 bg-slate-100">
        <table className="p-2">
          <thead>
            <tr>
              <th className="w-[300px]">ID</th>
              <th className="w-[600px]">Description</th>
            </tr>
          </thead>
          <tbody>
            {Todo !== undefined &&
              Todo.length > 0 &&
              Todo.map((element) => {
                return (
                  <tr key={element.todo_id} className="text-center">
                    <td className="w-[300px]">{element.todo_id}</td>
                    <td>{element.description}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllTodo;
