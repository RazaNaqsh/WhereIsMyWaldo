import { Character } from "@/utils";
import React from "react";

const Popup = ({
  position,
  chars,
}: {
  position: { x: number; y: number };
  chars: Character[];
}) => {
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
      {chars.map((ch) => (
        <p
          key={ch.id}
          className="py-2 px-4 text-white text-center cursor-pointer bg-black rounded-md m-1"
        >
          {ch.name}
        </p>
      ))}
    </div>
  );
};

export default Popup;
