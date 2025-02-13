import dotenv from "dotenv";
import { Pool } from "pg";
dotenv.config();
// Membuat instance Pool untuk mengelola koneksi ke database
const pool = new Pool({
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT || "5432"),
  user: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "mydatabase",
});

// export const query = async (text: string, params?: any[]) => {
//   const res = await pool.query(text, params);
//   return res.rows;
// };

// Fungsi untuk menjalankan query
// Fungsi untuk menjalankan query dengan tipe yang lebih fleksibel
// Fungsi untuk menjalankan query dengan tipe unknown
export const query = async (
  text: string,
  params?: (string | number | boolean)[]
): Promise<unknown[]> => {
  const res = await pool.query(text, params);
  return res.rows; // Tipe data hasil query akan ditentukan sebagai unknown
};

export const closePool = async () => {
  await pool.end();
};
