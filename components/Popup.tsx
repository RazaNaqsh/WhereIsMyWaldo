import { Marker } from "@/utils";
import React from "react";
interface Position {}
const Popup = ({ position }: { position: { x: number; y: number } }) => {
  const chars = ["red", "pichu", "sonic"];
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
        <p className="py-2 px-4 text-white text-center cursor-pointer bg-black rounded-md m-1">
          {ch}
        </p>
      ))}
    </div>
  );
};

export default Popup;
