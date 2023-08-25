"use client";
import Navbar from "@/components/Navbar";
import React, { useState, useEffect } from "react";

interface Score {
  name: string;
  id: string;
  seconds: number;
}

interface Scores extends Array<Score> {}

const page = () => {
  const [scores, SetScores] = useState<Scores>();

  const fetchData = async () => {
    try {
      const response = await fetch(`/api/score`);
      if (response.ok) {
        const res = await response.json();
        console.log("Retrieved data:", res.scores);
        SetScores(res.scores);
      } else {
        console.error("Error fetching data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchData();
    console.log(scores);
  }, []);

  return (
    <div>
      <Navbar />
      <section>
        <h1 className="text-center ">LeaderBoards</h1>
        <div>
          <div className="flex gap-5">
            <p>Index</p>
            <p>Name</p>
            <p>Time Taken</p>
          </div>
          {scores &&
            scores.map((score, idx) => (
              <div key={score.id} className="flex gap-5">
                <p>{idx + 1}</p>
                <p>{score.name}</p>
                <p>{score.seconds}</p>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default page;
