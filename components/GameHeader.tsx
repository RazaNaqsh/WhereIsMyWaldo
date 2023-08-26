import { formatTime } from "@/utils/Functions";
import { Text } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const GameHeader = ({
  timerActive,
  seconds,
  gameWon,
  finalSeconds,
}: {
  timerActive: boolean;
  seconds: number;
  gameWon: boolean;
  finalSeconds: number;
}) => {
  return (
    <header className="flex justify-around pt-3 pb-4">
      <div>
        <Link href="/">
          <Text className="text-white" weight="medium" size="5">
            Home
          </Text>
        </Link>
      </div>
      <div className="flex justify-around w-[40vw] gap-5">
        <div className="flex gap-10">
          <Text className="text-white mr-3" weight="medium" size="5">
            Find These Characters:-
          </Text>
          <Text className="text-white" weight="medium" size="3">
            Red
          </Text>
          <Text className="text-white" weight="medium" size="3">
            Pichu
          </Text>
          <Text className="text-white" weight="medium" size="3">
            Sonic
          </Text>
        </div>
        <div>
          <Text className="text-white" weight="medium" size="3">
            {timerActive ? (
              <p>Timer: {formatTime(seconds)}</p>
            ) : (
              <p>Timer: {gameWon ? formatTime(finalSeconds) : "00:00"} </p>
            )}
          </Text>
        </div>
      </div>
    </header>
  );
};

export default GameHeader;
