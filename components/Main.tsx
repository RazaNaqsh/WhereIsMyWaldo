import React from "react";
import Link from "next/link";
import { Text } from "@radix-ui/themes";
import Image from "next/image";
import waldo from "../public/images/chars.jpg";
const Main = () => {
  return (
    <div className="container m-auto h-[80vh]  flex flex-col justify-center items-center">
      <div className="w-[400px] h-[300px] relative  border-white border-2 flex justify-center rounded-md">
        <Image
          src={waldo}
          className="h-full w-full absolute object-cover -z-10 opacity-80"
          alt="WaldoImage"
        />
        <Link href="/Game" className="self-end">
          <button className="game-btn text-shadow bg-slate-900 hover:bg-slate-800">
            Start
          </button>
        </Link>
      </div>
      <div className="flex gap-14 mt-8">
        <div>
          {" "}
          <button className="game-btn  text-shadow  bg-indigo-500 hover:bg-indigo-600">
            LeaderBoards
          </button>
        </div>
        <div>
          <button className="game-btn text-shadow bg-yellow-600 hover:bg-yellow-500">
            About
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
