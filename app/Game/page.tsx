"use client";
import GameHeader from "@/components/GameHeader";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import waldoImg from "@/public/images/chars.jpg";
import { Character, Marker } from "@/utils";
import Popup from "@/components/Popup";
import Overlay from "@/components/Overlay";

const page = () => {
  const [windowPosition, setWindowPosition] = useState({ x: 0, y: 0 });
  const [isWindowOpen, setIsWindowOpen] = useState<boolean>(false);
  const [marker, setMarker] = useState<Marker | null>(null);
  const [showOverlay, setShowOverlay] = useState<boolean>(true);

  const [timerActive, setTimerActive] = useState<boolean>(false);
  const [seconds, setSeconds] = useState<number>(0);

  const chars: Character[] = [
    { id: 1, name: "red", isFound: false },
    { id: 2, name: "pichu", isFound: false },
    { id: 3, name: "sonic", isFound: false },
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (timerActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [timerActive]);

  const handleStartClick = () => {
    setShowOverlay(false);
    setTimerActive(true);
  };

  const showDetails = (e: any) => {
    let rect = e.target.getBoundingClientRect();
    let x = e.clientX - rect.left; //x position within the element.
    let y = e.clientY - rect.top; //y position within the element.

    if (!marker) {
      const newMarker = {
        x,
        y,
      };

      console.log("Left? : " + x + " ; Top? : " + y + ".");

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
      <GameHeader timerActive={timerActive} seconds={seconds} />
      {showOverlay && <Overlay handleStartClick={handleStartClick} />}
      <div
        className="container m-auto h-full w-full border-2 border-white relative"
        onClick={showDetails}
      >
        {marker && (
          <div
            className="absolute w-[90px] h-[90px] rounded-full border-[5px] border-dashed border-blue-500 bg-black bg-opacity-40 transform -translate-x-1/2 -translate-y-1/2 z-50"
            style={{ left: marker.x, top: marker.y }}
          ></div>
        )}
        {isWindowOpen && <Popup position={windowPosition} chars={chars} />}
        <Image
          src={waldoImg}
          alt="waldo-image"
          className="cursor-crosshair -z-0 bg-blend-darken"
        />
      </div>
    </div>
  );
};

export default page;
