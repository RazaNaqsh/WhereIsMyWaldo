import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Char from "@/models/Char";

export const POST = async (request: any): Promise<NextResponse> => {
  const { name, x, y } = await request.json();

  try {
    await connect(); // Call your database connection function

    const charData = new Char({ name, x, y });
    await charData.save();

    return new NextResponse(JSON.stringify({ charData }), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
