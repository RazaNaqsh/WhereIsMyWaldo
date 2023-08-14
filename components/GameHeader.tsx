import React from "react";

const GameHeader = () => {
  return (
    <header className="flex justify-around pt-3 pb-4">
      <div>
        <h2>Game</h2>
      </div>
      <div className="flex justify-around w-[30vw]">
        <div className="flex gap-10">
          <h3>Red</h3>
          <h3>Pichu</h3>
          <h3>Sonic</h3>
        </div>
        <div>
          <h3>timer: 00</h3>
        </div>
      </div>
    </header>
  );
};

export default GameHeader;
