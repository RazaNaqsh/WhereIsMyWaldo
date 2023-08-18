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

export const GET = async (request: any): Promise<NextResponse> => {
  const { name } = request.query;

  try {
    await connect();

    const data = await Char.findOne({ name });

    if (!data) {
      return new NextResponse("No Such Data", { status: 404 });
    }
    return new NextResponse(JSON.stringify({ data }), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
