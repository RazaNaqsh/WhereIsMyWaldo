import React from "react";

const GameHeader = () => {
  return (
    <header className="flex justify-around p-3">
      <div>
        <h2>Game</h2>
      </div>
      <div className="flex justify-around w-[30vw]">
        <div className="flex gap-10">
          <h3>char1</h3>
          <h3>char1</h3>
          <h3>char1</h3>
        </div>
        <div>
          <h3>timer</h3>
        </div>
      </div>
    </header>
  );
};

export default GameHeader;
