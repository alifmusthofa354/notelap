"use client";

import { Card } from "flowbite-react";

import { useState, useEffect } from "react";

// Definisikan tipe data untuk Quote
type Quote = {
  id: number;
  title: string;
  content: string;
};

export default function QouteList() {
  // Definisikan state dengan tipe data yang sesuai
  const [quotes, setQuotes] = useState<Quote[]>([]); // Tipe untuk data quotes
  const [loading, setLoading] = useState<boolean>(true); // Tipe untuk loading
  const [error, setError] = useState<string | null>(null); // Tipe untuk error

  useEffect(() => {
    // Fungsi untuk fetching data
    const fetchData = async () => {
      try {
        const response = await fetch("/api/qoute"); // Mengambil data dari API
        if (!response.ok) {
          throw new Error("Gagal memuat data");
        }
        const data: Quote[] = await response.json(); // Mengubah data JSON yang diterima
        setQuotes(data); // Menyimpan data ke dalam state
      } catch (err) {
        setError(err instanceof Error ? err.message : "Terjadi kesalahan"); // Menangani error
        console.error(err);
      } finally {
        setLoading(false); // Mengubah status loading setelah fetch selesai
      }
    };

    fetchData(); // Memanggil fungsi fetching data
  }, []); // Empty dependency array untuk menjalankan effect hanya sekali saat komponen pertama kali dimuat

  if (loading) {
    return <div>Loading...</div>; // Menampilkan loading ketika data sedang diambil
  }

  if (error) {
    return <div>Error: {error}</div>; // Menampilkan error jika ada masalah
  }

  return (
    <div className="max-w-5xl mx-auto px-4">
      <h1 className="text-3xl font-bold text-center mb-6">Quotes</h1>

      {quotes.map((quote) => (
        <Card
          href="#"
          className="min-w-full my-4 p-6 border rounded-lg shadow-lg bg-white"
          key={quote.id}
        >
          <div className="w-1/2 mb-4">
            <h5 className="text-base font-semibold text-gray-900">
              {quote.title}
            </h5>
          </div>

          <div className="w-full">
            <p className="text-base text-gray-700">{quote.content}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}
