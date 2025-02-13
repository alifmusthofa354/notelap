import { NextResponse } from "next/server";
import { query } from "@/lib/db";
import { z } from "zod";

// Skema validasi untuk GET berdasarkan ID
const getByIdSchema = z.object({
  id: z.number().int("ID must be an integer").positive("ID must be positive"),
});

// Endpoint untuk mengambil data berdasarkan ID dari database
export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Validasi ID
    const id = (await params).id;
    const parsedData = getByIdSchema.safeParse({ id: parseInt(id) });

    if (!parsedData.success) {
      return NextResponse.json(
        { error: parsedData.error.errors.map((e) => e.message) },
        { status: 400 }
      );
    }

    // Query untuk mengambil data berdasarkan ID
    const result = await query("SELECT * FROM users WHERE id = $1", [
      parseInt(id),
    ]);

    if (result.length === 0) {
      return NextResponse.json({ error: "Data not found" }, { status: 404 });
    }

    return NextResponse.json(result[0], { status: 200 }); // Mengembalikan data berdasarkan ID
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Database Query Error" },
      { status: 500 }
    );
  }
}
