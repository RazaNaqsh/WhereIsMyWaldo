import React from "react";

const Main = () => {
  return (
    <div className="container m-auto h-[80vh] border-2 border-white flex flex-col justify-center items-center">
      <div className="w-[400px] h-[300px] bg-gray-400 border-white border-2 flex justify-center">
        <button className="self-end px-4 py-2 rounded-md border-2 border-blue-200">
          Start
        </button>
      </div>
      <div className="flex gap-10 mt-6">
        <div>
          {" "}
          <h3>LeaderBoards</h3>
        </div>
        <div>
          <h3>About</h3>
        </div>
      </div>
    </div>
  );
};

export default Main;
