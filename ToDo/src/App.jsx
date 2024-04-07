import React from "react";
import AllTodo from "./components/AllTodo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./components/Create";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllTodo />}></Route>
          <Route path="/create" element={<Create />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
