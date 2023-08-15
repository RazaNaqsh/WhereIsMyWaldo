import React from "react";

const Overlay = ({ handleStartClick }: { handleStartClick: () => void }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-black p-8 rounded shadow-md">
        <h2 className=" text-center text-white text-xl font-semibold mb-4">
          Spot the Characters
        </h2>
        <p className="text-center text-gray-600 mb-4">
          The Timer will commence when you click start
        </p>
        <button
          className="block m-auto bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          onClick={handleStartClick}
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default Overlay;
