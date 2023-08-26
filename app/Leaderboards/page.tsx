"use client";
import Navbar from "@/components/Navbar";
import { formatTime } from "@/utils/Functions";
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
      <section className="text-center mt-8">
        <h1 className="text-3xl font-semibold">LeaderBoards</h1>
        <div className="mt-8">
          <table className="w-[80%] m-auto border-collapse">
            <thead>
              <tr>
                <th className="py-2">Idx</th>
                <th className="py-2">Name</th>
                <th className="py-2">Time Taken</th>
              </tr>
            </thead>
            <tbody>
              {scores &&
                scores.map((score, idx) => (
                  <tr key={idx} className="text-center border-t">
                    <td className="py-2">{idx + 1}</td>
                    <td className="py-2">{score.name}</td>
                    <td className="py-2">{formatTime(score.seconds)} min</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default page;
