import Image from "next/image";

export default function Home() {
  return (
    <main>
      <header>
        <h1 className="text-center text-4xl">Where's My Waldo</h1>
      </header>
      <div className="container m-auto h-[80vh] border-2 border-white flex flex-col justify-center items-center">
        <div className="w-[400px] h-[300px] border-white border-2 "></div>
        <div className="flex gap-10 mt-6">
          <div>
            {" "}
            <h3>LeaderBoards</h3>
          </div>
          <div>
            <h3>About</h3>
          </div>
        </div>
      </div>
    </main>
  );
}
