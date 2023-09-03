import { formatTime } from "@/utils/Functions";
import { Character } from "@/utils/types";
import { Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import red from "@/public/images/red.png";
import pichu from "@/public/images/pichu.png";
import sonic from "@/public/images/sonic.png";

const GameHeader = ({
  timerActive,
  seconds,
  gameWon,
  finalSeconds,
  chars,
}: {
  timerActive: boolean;
  seconds: number;
  gameWon: boolean;
  finalSeconds: number;
  chars: Character[];
}) => {
  return (
    <header className="flex items-center justify-around pt-3 pb-4">
      <div className=" p-3 bg-gray-800 bg-opacity-75 rounded-lg">
        <Link href="/">
          <Text
            className="text-white text-xl tracking-wider font-bold"
            weight="medium"
            size="5"
          >
            Home
          </Text>
        </Link>
      </div>
      <div className="flex gap-10 p-2 bg-gray-800 bg-opacity-75 rounded-lg">
        {chars.map((ch) => (
          <div key={ch.id} className="flex mx-4 items-center">
            <Image
              src={`/images/${ch.name}.png`}
              width={30}
              height={30}
              alt="charImg"
              className="object-cover"
            />
            <p
              className={`text-lg ${ch.isFound === true ? "line-through" : ""}`}
            >
              {ch.name}
            </p>
          </div>
        ))}
      </div>

      <div className="p-4 bg-gray-800 bg-opacity-75 rounded-lg">
        <Text className="text-white" weight="medium" size="3">
          {timerActive ? (
            <p>Timer: {formatTime(seconds)}</p>
          ) : (
            <p>Timer: {gameWon ? formatTime(finalSeconds) : "00:00"} </p>
          )}
        </Text>
      </div>
    </header>
  );
};

export default GameHeader;
