// app/api/users/route.js
import { supabase } from "../../../lib/supabase";
import { NextResponse } from "next/server";
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

export async function GET() {
  try {
    // Ambil data pengguna dari tabel 'users' di Supabase
    const { data, error } = await supabase.from("users").select("*");
    if (error) {
      return NextResponse.json(
        { error: "Database Query Error" },
        { status: 500 }
      );
    }
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Database Error" }, { status: 500 });
  }
}

// POST: Menambahkan pengguna baru
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsedBody = postSchema.safeParse(body);

    if (!parsedBody.success) {
      return NextResponse.json(parsedBody.error.format(), { status: 400 });
    }

    const { name, description } = parsedBody.data;

    const { error } = await supabase
      .from("users")
      .insert([{ name, description }]);

    if (error) {
      return NextResponse.json(
        { error: "Database Insert Error" },
        { status: 500 }
      );
    }

    return NextResponse.json({ succes: "Created data" }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Request Error" }, { status: 400 });
  }
}

// PUT: Memperbarui data pengguna berdasarkan ID
export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const parsedBody = putSchema.safeParse(body);

    if (!parsedBody.success) {
      return NextResponse.json(parsedBody.error.format(), { status: 400 });
    }

    const { id, name, description } = parsedBody.data;

    const { error } = await supabase
      .from("users")
      .update({ name, description })
      .eq("id", id);

    if (error) {
      return NextResponse.json(
        { error: "Database Update Error" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { succes: "Update data success" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Request Error" }, { status: 400 });
  }
}

// PATCH: Memperbarui sebagian data pengguna berdasarkan ID
export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    const parsedBody = patchSchema.safeParse(body);

    if (!parsedBody.success) {
      return NextResponse.json(parsedBody.error.format(), { status: 400 });
    }

    const { name, description } = parsedBody.data;

    // Mendeklarasikan updates dengan tipe yang sesuai
    const updates: { name?: string; description?: string } = {};

    if (name) updates.name = name;
    if (description) updates.description = description;

    if (Object.keys(updates).length === 0) {
      return NextResponse.json({ error: "No data to update" }, { status: 400 });
    }

    const { error } = await supabase
      .from("users")
      .update(updates)
      .eq("id", body.id);

    if (error) {
      return NextResponse.json(
        { error: "Database Update Error" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { succes: "Update data success" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Request Error" }, { status: 400 });
  }
}

// DELETE: Menghapus pengguna berdasarkan ID
export async function DELETE(req: Request) {
  try {
    const body = await req.json();
    const parsedBody = deleteSchema.safeParse(body);

    if (!parsedBody.success) {
      return NextResponse.json(parsedBody.error.format(), { status: 400 });
    }

    const { id } = parsedBody.data;

    const { error } = await supabase.from("users").delete().eq("id", id);

    if (error) {
      return NextResponse.json(
        { error: "Database Delete Error" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "User deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Request Error" }, { status: 400 });
  }
}
