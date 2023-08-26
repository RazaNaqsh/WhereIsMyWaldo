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
        borderRadius: "5px",
        backgroundColor: "rgba(0,0,0,0.55)",
      }}
    >
      {remChars.map((ch) => (
        <p
          key={ch.id}
          className="py-3 px-6 text-white text-center cursor-pointer bg-black hover:bg-green-500 transition-all rounded-md m-1"
          onClick={(e) => handleCharSelect(e, ch)}
        >
          {ch.name}
        </p>
      ))}
    </div>
  );
};

export default Popup;
