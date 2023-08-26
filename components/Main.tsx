import React from "react";
import Link from "next/link";
import Image from "next/image";
import waldo from "../public/images/chars.jpg";
const Main = () => {
  return (
    <div className="container m-auto h-[80vh]  flex flex-col justify-center items-center">
      <div className="mt-10 w-[600px] h-[500px] relative  border-white border-2 flex justify-center items-end rounded-md">
        <Image
          src={waldo}
          className="h-full w-full absolute object-cover -z-10 opacity-80"
          alt="WaldoImage"
        />
        <Link href="/Game" className="">
          <button className="game-btn text-shadow bg-slate-900 hover:bg-slate-800">
            Start
          </button>
        </Link>
      </div>
      <div className="flex gap-14 mt-8">
        <div>
          {" "}
          <Link href="/Leaderboards">
            <button className="game-btn  text-shadow  bg-indigo-500 hover:bg-indigo-600">
              LeaderBoards
            </button>
          </Link>
        </div>
        <div>
          <Link href="/About">
            <button className="game-btn text-shadow bg-yellow-600 hover:bg-yellow-500">
              About
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
