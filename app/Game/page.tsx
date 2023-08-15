"use client";
import GameHeader from "@/components/GameHeader";
import Image from "next/image";
import React, { useState } from "react";

import waldoImg from "@/public/images/chars.jpg";
import { Marker } from "@/utils";
import Popup from "@/components/Popup";

const page = () => {
  const [windowPosition, setWindowPosition] = useState({ x: 0, y: 0 });
  const [isWindowOpen, setIsWindowOpen] = useState(false);
  const [marker, setMarker] = useState<Marker | null>(null);
  const [showOverlay, setShowOverlay] = useState(true);

  const handleStartClick = () => {
    setShowOverlay(false);
  };

  const showDetails = (e: any) => {
    let rect = e.target.getBoundingClientRect();
    let x = e.clientX - rect.left; //x position within the element.
    let y = e.clientY - rect.top; //y position within the element.
    console.log("Left? : " + x + " ; Top? : " + y + ".");

    if (!marker) {
      const newMarker = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };

      setMarker(newMarker);

      setWindowPosition({ x, y });
      setIsWindowOpen(!isWindowOpen);
    } else {
      setIsWindowOpen(false);
      setMarker(null); // Remove the marker on next click
    }
  };
  return (
    <div>
      <GameHeader />
      {showOverlay && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-black p-8 rounded shadow-md">
            <h2 className="text-white text-xl font-semibold mb-4">
              Spot the Characters
            </h2>
            <p className="text-gray-600 mb-4">
              The Timer will commence when you click start
            </p>
            <button
              className="m-auto bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
              onClick={handleStartClick}
            >
              Start
            </button>
          </div>
        </div>
      )}
      <div
        className="container m-auto h-full w-full border-2 border-white relative"
        onClick={showDetails}
      >
        {marker && (
          <div
            className="marker z-50"
            style={{ left: marker.x, top: marker.y }}
          ></div>
        )}
        {isWindowOpen && <Popup position={windowPosition} />}
        <Image
          src={waldoImg}
          alt="waldo-image"
          className="cursor-crosshair -z-0 bg-blend-darken"
          // onClick={showDetails}
        />
      </div>
    </div>
  );
};

export default page;
