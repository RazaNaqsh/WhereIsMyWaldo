import { Text } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const GameHeader = () => {
  return (
    <header className="flex justify-around pt-3 pb-4">
      <div>
        <Link href="/">
          <Text className="text-white" weight="medium" size="5">
            Game
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
            Timer: 00
          </Text>
        </div>
      </div>
    </header>
  );
};

export default GameHeader;
