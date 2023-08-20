import { Character } from "@/utils/types";
import React from "react";

const Popup = ({
  position,
  chars,
  handleCharSelect,
}: {
  position: { x: number; y: number };
  chars: Character[];
  handleCharSelect: any;
}) => {
  const remChars = chars.filter((ch) => ch.isFound != true);
  console.log(remChars);
  return (
    <div
      style={{
        position: "absolute",
        left: position.x + 45,
        top: position.y - 20,
        border: "1px solid black",
        backgroundColor: "rgba(0,0,0,0.4)",
      }}
    >
      {remChars.map((ch) => (
        <p
          key={ch.id}
          className="py-2 px-4 text-white text-center cursor-pointer bg-black rounded-md m-1"
          onClick={(e) => handleCharSelect(e, ch)}
        >
          {ch.name}
        </p>
      ))}
    </div>
  );
};

export default Popup;
