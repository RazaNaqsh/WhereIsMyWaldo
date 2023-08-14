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
    <>
      <GameHeader />
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
    </>
  );
};

export default page;
