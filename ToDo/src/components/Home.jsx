import React from "react";

const Home = () => {
  return (
    <div className="text-center flex justify-center p-4 mt-[190px]">
      <form action="/todo" method="post">
        <input
          className=" border-black border rounded p-2 w-[700px]"
          type="text"
          placeholder="Description"
          name="description"
        />
        <button className=" rounded bg-blue-400 p-2 ml-1 w-20">Post</button>
      </form>
    </div>
  );
};

export default Home;
