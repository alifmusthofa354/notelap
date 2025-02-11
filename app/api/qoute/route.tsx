import { NextResponse } from "next/server";

import quotes from "../../../data/qoute";
export async function GET() {
  try {
    return NextResponse.json(quotes);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Database Query Error Coy" },
      { status: 500 }
    );
  }
}
