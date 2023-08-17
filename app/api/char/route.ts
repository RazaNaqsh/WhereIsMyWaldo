import { NextResponse } from "next/server";
import connect from "@/utils/db";

export const GET = async (request: any): Promise<NextResponse> => {
  const { x, y, name } = request.body;

  try {
    await connect(); // Call your database connection function

    // Do something with the data (save, update, etc.)

    return new NextResponse(JSON.stringify({ isValid: true }), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
