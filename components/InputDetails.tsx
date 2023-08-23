import React, { useState } from "react";

const InputDetails = () => {
  const [winner, setWinner] = useState<string>("");

  const submitWinner = async () => {};
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-black p-8 rounded shadow-md">
        <h2
          className=" text-center text-white t
        ext-xl font-semibold mb-4"
        >
          Enter Your Name
        </h2>
        <div>
          <form onSubmit={submitWinner}>
            <input
              type="text"
              placeholder="name..."
              className="bg-gray-100 w-[350px] px-3 py-2 rounded-md my-4"
              name="winner"
              value={winner}
              onChange={(e) => setWinner(e.target.value)}
            />

            <button className="block m-auto bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InputDetails;
