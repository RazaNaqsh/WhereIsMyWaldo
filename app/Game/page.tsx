"use client";
import GameHeader from "@/components/GameHeader";
import Image from "next/image";
import React from "react";

import waldoImg from "@/public/images/chars.jpg";

const page = () => {
  const showDetails = (e: any) => {
    let rect = e.target.getBoundingClientRect();
    let x = e.clientX - rect.left; //x position within the element.
    let y = e.clientY - rect.top; //y position within the element.
    console.log("Left? : " + x + " ; Top? : " + y + ".");
  };
  return (
    <>
      <GameHeader />
      <div className="container m-auto">
        <Image
          src={waldoImg}
          alt="waldo-image"
          className="cursor-crosshair"
          onClick={showDetails}
        />
      </div>
    </>
  );
};

export default page;
