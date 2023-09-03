import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <h1 className="mt-12 text-3xl text-center  font-semibold p-2 bg-gray-800 bg-opacity-75 rounded-lg">
        About
      </h1>
      <section className="m-auto mt-4 rounded-lg w-[60%] bg-gray-950 bg-opacity-60 p-6">
        <p>This is about page..</p>
      </section>
    </div>
  );
};

export default page;
