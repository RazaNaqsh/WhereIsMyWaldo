import { NextRequest, NextResponse } from "next/server";
import connect from "@/utils/db";
import Winner from "@/models/Winner";

export const POST = async (request: any): Promise<NextResponse> => {
  try {
    const { name, seconds } = await request.json();
    await connect();

    const winnerData = new Winner({ name, seconds });
    await winnerData.save();

    return new NextResponse(JSON.stringify({ winnerData }), { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};

export const GET = async (request: any): Promise<NextResponse> => {
  try {
    await connect();

    const scores = await Winner.find();

    const reversedScores = scores.reverse();

    return new NextResponse(JSON.stringify({ scores: reversedScores }), {
      status: 200,
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
