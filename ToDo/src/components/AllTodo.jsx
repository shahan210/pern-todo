import React, { useEffect, useState } from "react";
import api from "../API/api";
import { MdDelete } from "react-icons/md";
const AllTodo = () => {
  const [todo, SetTodo] = useState("");
  const [loading, setloading] = useState(true);
  const [id, setId] = useState("");
  useEffect(() => {
    getAlldata();
  }, [loading]);
  console.log(todo);
  const getSpecific = async (e) => {
    e.preventDefault();
    api
      .get(`/todo/${id}`)
      .then((response) => {
        // console.log(response);
        if (response.data === "") {
          alert("No Entry Found");
          SetTodo("");
          return;
        }
        SetTodo([response]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getAlldata = async () => {
    if (loading) {
      await api
        .get("/todo")
        .then((result) => {
          setloading(false);
          console.log(result);
          if (result.length > 0 && result.length < 100) {
            SetTodo(result);
          } else {
            console.log(result.rows);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const deleteSpecific = async (id) => {
    await api
      .delete(`/todo/${id}`)
      .then((response) => {
        // console.log(response);
        setloading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteAll = async () => {
    await api
      .delete("/all")
      .then((response) => {
        console.log(response);
        setloading(true);
        SetTodo("");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="text-center flex justify-center p-4 mt-[190px]">
        <form method="get">
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
        <button
          onClick={deleteAll}
          className="rounded w-20 p-2 bg-red-500 ml-1"
        >
          Delete
        </button>
      </div>
      <div className=" flex justify-center mt-4 bg-slate-100">
        <table className="p-2">
          <thead>
            <tr>
              <th className="w-[300px]">ID</th>
              <th className="w-[600px]">Description</th>
              <th className="w-[300px]">Delete</th>
            </tr>
          </thead>
          <tbody>
            {todo !== undefined &&
              todo.length > 0 &&
              todo.map((element) => {
                return (
                  <tr key={element.todo_id} className="text-center">
                    <td className="w-[300px]">{element.todo_id}</td>
                    <td>{element.description}</td>
                    <td className="w-[300px]">
                      <button
                        onClick={() => {
                          deleteSpecific(element.todo_id);
                        }}
                      >
                        <MdDelete />
                      </button>
                    </td>
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
