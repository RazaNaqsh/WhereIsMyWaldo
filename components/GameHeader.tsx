import { Text } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const GameHeader = ({
  timerActive,
  seconds,
}: {
  timerActive: boolean;
  seconds: number;
}) => {
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };
  return (
    <header className="flex justify-around pt-3 pb-4">
      <div>
        <Link href="/">
          <Text className="text-white" weight="medium" size="5">
            Home
          </Text>
        </Link>
      </div>
      <div className="flex justify-around w-[30vw]">
        <div className="flex gap-10">
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
              <p>Timer: 0:00 </p>
            )}
          </Text>
        </div>
      </div>
    </header>
  );
};

export default GameHeader;
