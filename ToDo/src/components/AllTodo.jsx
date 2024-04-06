import React, { useEffect, useState } from "react";
import api from "../API/api";
const AllTodo = () => {
  const [Todo, SetTodo] = useState("");
  useEffect(() => {
    getAlldata();
  }, [Todo]);

  const getAlldata = async () => {
    await api
      .get("/todo")
      .then((result) => {
        if (result.rows.length > 0) {
          SetTodo(result.rows);
        } else {
          console.log(result.rows);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className=" flex justify-center mt-4 bg-slate-100">
      <table className="p-2">
        <thead>
          <tr>
            <th className="w-[300px]">ID</th>
            <th className="w-[600px]">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td className="w-[300px]">123</td>
            <td>qwe</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AllTodo;
