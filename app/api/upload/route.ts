import { NextRequest, NextResponse } from "next/server";
import connect from "@/utils/db";
import Winner from "@/models/Winner";

export const POST = async (request: any): Promise<NextResponse> => {
  try {
    const { name } = request.body;
    await connect();

    const oldData = await Winner.findOne({ name });

    if (oldData) {
      return new NextResponse("Username Already Exists", { status: 500 });
    }

    const winnerData = new Winner({ name });
    await winnerData.save();

    return new NextResponse(JSON.stringify({ winnerData }), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
