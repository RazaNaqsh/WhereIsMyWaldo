import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header>
      <Link href="/">
        <h1 className="text-shadow text-center text-white text-4xl">
          Wheres My Waldo
        </h1>
      </Link>
    </header>
  );
};

export default Navbar;
