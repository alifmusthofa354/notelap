import quotes from "../../../../data/qoute";

// // Simulasi data quotes
// const quotes: Quote[] = [
//   { id: 1, title: "Quote 1", content: "Content of Quote 1" },
//   { id: 2, title: "Quote 2", content: "Content of Quote 2" },
//   { id: 3, title: "Quote 3", content: "Content of Quote 3" },
//   // Tambahkan quotes lainnya jika perlu
// ];

import { NextResponse } from "next/server";
import { NextRequest } from "next/server"; // Pastikan import NextRequest

// type Quote = {
//   id: number;
//   title: string;
//   content: string;
// };

// const quotes: Quote[] = [
//   { id: 1, title: "Quote 1", content: "Content of Quote 1" },
//   { id: 2, title: "Quote 2", content: "Content of Quote 2" },
//   { id: 3, title: "Quote 3", content: "Content of Quote 3" },
//   // Tambahkan quotes lainnya jika perlu
// ];

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id; // Mengambil id dari URL parameter

    // Mengecek apakah id ada
    if (!id) {
      return NextResponse.json(
        { error: "ID tidak ditemukan" },
        { status: 400 }
      );
    }

    // Mencari quote berdasarkan id
    const quote = quotes.find((q) => q.id === parseInt(id));

    if (!quote) {
      return NextResponse.json(
        { error: "Quote tidak ditemukan" },
        { status: 404 }
      );
    }

    return NextResponse.json(quote);
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
