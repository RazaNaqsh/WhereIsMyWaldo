import React from "react";
import Link from "next/link";
import Image from "next/image";
import waldo from "../public/images/chars.jpg";
const Main = () => {
  return (
    <div className="container m-auto h-[80vh] flex flex-col justify-center items-center">
      <div className="mt-10 w-[400px] h-[300px] relative flex justify-center items-center rounded-lg overflow-hidden">
        <Image
          src={waldo}
          className="h-full w-full absolute object-cover -z-10 opacity-80"
          alt="WaldoImage"
        />
        <p className="bg-white shadow-xl bg-opacity-60 p-4 w-full text-black font-extrabold tracking-widest text-center text-3xl">
          Map1
        </p>
      </div>
      <div className="flex gap-14 mt-12 p-2 bg-gray-800 bg-opacity-75 rounded-full">
        <div>
          {" "}
          <Link href="/Leaderboards">
            <button className="game-btn font-medieval  text-shadow  bg-indigo-500 hover:bg-indigo-600 rounded-full">
              LeaderBoards
            </button>
          </Link>
        </div>
        <div>
          <Link href="/Game" className="">
            <button className="game-btn font-medieval text-shadow bg-slate-900 hover:bg-slate-800 rounded-full">
              Start
            </button>
          </Link>
        </div>
        <div>
          <Link href="/About">
            <button className="game-btn font-medieval text-shadow bg-yellow-600 hover:bg-yellow-500 rounded-full">
              About
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
