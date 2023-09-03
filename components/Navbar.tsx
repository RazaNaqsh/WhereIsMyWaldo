import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header>
      <Link href="/">
        <h1 className="font-medieval text-shadow text-center text-white text-6xl mt-4">
          Wheres My Waldo
        </h1>
      </Link>
    </header>
  );
};

export default Navbar;
