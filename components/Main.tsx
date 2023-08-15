import React from "react";
import Link from "next/link";
import { Text } from "@radix-ui/themes";

const Main = () => {
  return (
    <div className="container m-auto h-[80vh] border-2 border-white flex flex-col justify-center items-center">
      <div className="w-[400px] h-[300px] bg-gray-400 border-white border-2 flex justify-center">
        <Link
          href="/Game"
          className="self-end px-4 py-2 rounded-md border-2 border-blue-200"
        >
          <button>Start</button>
        </Link>
      </div>
      <div className="flex gap-10 mt-6">
        <div>
          {" "}
          <Text className="text-white" weight="medium" size="5">
            Leaderboards
          </Text>
        </div>
        <div>
          <Text className="text-white" weight="medium" size="5">
            About
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Main;
