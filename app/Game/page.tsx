import GameHeader from "@/components/GameHeader";
import Image from "next/image";
import React from "react";

import waldoImg from "@/public/images/chars.jpg";

const page = () => {
  return (
    <>
      <GameHeader />
      <div className="container m-auto">
        <Image src={waldoImg} alt="waldo-image" className="cursor-crosshair" />
      </div>
    </>
  );
};

export default page;
