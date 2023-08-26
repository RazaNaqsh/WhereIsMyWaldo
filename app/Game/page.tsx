"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import waldoImg from "@/public/images/chars.jpg";
import GameHeader from "@/components/GameHeader";
import Popup from "@/components/Popup";
import Overlay from "@/components/Overlay";
import MarkerCircle from "@/components/Marker";

import { Character, Marker } from "@/utils/types";
import { fetchData } from "@/utils/Functions";
import InputDetails from "@/components/InputDetails";

const page = () => {
  const [gameWon, setGameWon] = useState<boolean>(false);
  const [windowPosition, setWindowPosition] = useState({ x: 0, y: 0 });
  const [isWindowOpen, setIsWindowOpen] = useState<boolean>(false);
  const [marker, setMarker] = useState<Marker | null>(null);
  const [showOverlay, setShowOverlay] = useState<boolean>(true);

  const [timerActive, setTimerActive] = useState<boolean>(false);
  const [seconds, setSeconds] = useState<number>(0);
  const [finalSeconds, setFinalSeconds] = useState<number>(0);

  const [selectedChar, setSelectedChar] = useState("");

  const [chars, setChars] = useState<Character[]>([
    { id: 1, name: "red", isFound: false },
    { id: 2, name: "pichu", isFound: false },
    { id: 3, name: "sonic", isFound: false },
  ]);

  useEffect(() => {
    if (chars.every((char) => char.isFound)) {
      setFinalSeconds(seconds);
      setTimerActive(false);
      setGameWon(true);
    }
  }, [chars]);

  const isCharInsideMark = (char: { name: string; x: number; y: number }) => {
    if (marker) {
      if (
        char.x > marker.x - 45 &&
        char.x < marker.x + 40 &&
        char.y > marker.y - 45 &&
        char.y < marker.y + 45
      ) {
        return true;
      }
    }

    return false;
  };

  const handleCharSelect = async (
    e: any,
    ch: { id: number; name: string; isFound: boolean }
  ) => {
    console.log(ch.name);
    setSelectedChar(ch.name);

    const charData = await fetchData(ch.name);

    console.log(selectedChar);
    console.log(charData);

    if (isCharInsideMark(charData)) {
      alert(`${charData.name} is inside`);
      setChars((prev) =>
        prev.map((ch) =>
          ch.name === charData.name ? { ...ch, isFound: true } : ch
        )
      );

      console.log(chars);
    } else {
      alert(`${charData.name} is not inside`);
    }
  };

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
      <GameHeader
        timerActive={timerActive}
        seconds={seconds}
        gameWon={gameWon}
        finalSeconds={finalSeconds}
      />
      {showOverlay && <Overlay handleStartClick={handleStartClick} />}
      {gameWon && (
        <InputDetails setGameWon={setGameWon} seconds={finalSeconds} />
      )}
      <div
        className="container m-auto h-full w-full border-2 border-white relative"
        onClick={showDetails}
      >
        {marker && <MarkerCircle marker={marker} />}
        {isWindowOpen && (
          <Popup
            position={windowPosition}
            chars={chars}
            handleCharSelect={handleCharSelect}
          />
        )}
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
