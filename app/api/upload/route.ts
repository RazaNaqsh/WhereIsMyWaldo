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
    return new NextResponse(JSON.stringify({ msg: "Saving Error" }), {
      status: 500,
    });
  }
};
