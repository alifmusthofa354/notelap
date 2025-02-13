import { NextResponse } from "next/server";
import { query } from "@/lib/db";
import { z } from "zod";

// Skema validasi untuk POST
const postSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long"),
  description: z
    .string()
    .min(5, "Description must be at least 5 characters long"),
});

// Skema validasi untuk PUT
const putSchema = z.object({
  id: z.number().int("ID must be an integer").positive("ID must be positive"),
  name: z.string().min(3, "Name must be at least 3 characters long"),
  description: z
    .string()
    .min(5, "Description must be at least 5 characters long"),
});

// Skema validasi untuk DELETE
const deleteSchema = z.object({
  id: z.number().int("ID must be an integer").positive("ID must be positive"),
});

// Skema validasi untuk PATCH
// Skema validasi untuk PATCH
const patchSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long").optional(),
  description: z
    .string()
    .min(5, "Description must be at least 5 characters long")
    .optional(),
});

// Endpoint untuk mengambil data dari database
export async function GET() {
  try {
    const posts = await query("SELECT * FROM users");
    return NextResponse.json(posts);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Database Query Error Coy" },
      { status: 500 }
    );
  }
}

// Fungsi untuk menambahkan data ke PostgreSQL
export async function POST(req: Request) {
  try {
    const { name, description } = await req.json(); // Ambil data JSON dari request body
    // Validasi data dengan Zod
    const parsedData = postSchema.safeParse({ name, description });

    if (!parsedData.success) {
      return NextResponse.json(
        { error: parsedData.error.errors.map((e) => e.message) },
        { status: 400 }
      );
    }

    // Query untuk menambahkan data baru
    const result = await query(
      "INSERT INTO users (name, description) VALUES ($1, $2) RETURNING *",
      [name, description]
    );

    return NextResponse.json(result[0], { status: 201 }); // Mengembalikan data yang baru dibuat
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create data" },
      { status: 500 }
    );
  }
}

// Fungsi untuk memperbarui data di PostgreSQL
export async function PUT(req: Request) {
  try {
    const { id, name, description } = await req.json(); // Ambil data dari request body

    // Validasi data dengan Zod
    const parsedData = putSchema.safeParse({ id, name, description });
    if (!parsedData.success) {
      return NextResponse.json(
        { error: parsedData.error.errors.map((e) => e.message) },
        { status: 400 }
      );
    }

    // Query untuk memperbarui data
    const result = await query(
      "UPDATE users SET name = $1, description = $2 WHERE id = $3 RETURNING *",
      [name, description, id]
    );

    if (result.length === 0) {
      return NextResponse.json({ error: "Data not found" }, { status: 404 });
    }

    return NextResponse.json(result[0], { status: 200 }); // Mengembalikan data yang diperbarui
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to update data" },
      { status: 500 }
    );
  }
}

// Fungsi untuk memperbarui data di PostgreSQL (partial update)
export async function PATCH(req: Request) {
  try {
    // Ambil data dari request body
    const { id, name, description } = await req.json();

    // Validasi data dengan Zod
    const parsedData = patchSchema.safeParse({ name, description });

    if (!parsedData.success) {
      return NextResponse.json(
        { error: parsedData.error.errors.map((e) => e.message) },
        { status: 400 }
      );
    }

    // Membuat array untuk query dinamis
    const updates: string[] = [];
    ///const paramsArray: any[] = [];
    const paramsArray: string[] = [];

    // Jika ada name, tambahkan ke query
    if (name) {
      updates.push("name = $1");
      paramsArray.push(name);
    }

    // Jika ada description, tambahkan ke query
    if (description) {
      updates.push("description = $2");
      paramsArray.push(description);
    }

    // Jika tidak ada data yang ingin diperbarui
    if (updates.length === 0) {
      return NextResponse.json(
        { error: "No data provided for update" },
        { status: 400 }
      );
    }

    // Tambahkan ID ke akhir parameter
    paramsArray.push(id);

    // Query untuk memperbarui data berdasarkan ID
    const queryText = `UPDATE users SET ${updates.join(", ")} WHERE id = $${
      paramsArray.length
    } RETURNING *`;
    const result = await query(queryText, paramsArray);

    // Cek jika data tidak ditemukan
    if (result.length === 0) {
      return NextResponse.json({ error: "Data not found" }, { status: 404 });
    }

    // Mengembalikan data yang diperbarui
    return NextResponse.json(result[0], { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to update data" },
      { status: 500 }
    );
  }
}

// Fungsi untuk menghapus data dari PostgreSQL
export async function DELETE(req: Request) {
  try {
    const { id } = await req.json(); // Ambil ID dari request body

    // Validasi data dengan Zod
    const parsedData = deleteSchema.safeParse({ id });
    if (!parsedData.success) {
      return NextResponse.json(
        { error: parsedData.error.errors.map((e) => e.message) },
        { status: 400 }
      );
    }

    // Query untuk menghapus data
    const result = await query("DELETE FROM users WHERE id = $1 RETURNING *", [
      id,
    ]);

    if (result.length === 0) {
      return NextResponse.json({ error: "Data not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Data deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to delete data" },
      { status: 500 }
    );
  }
}
