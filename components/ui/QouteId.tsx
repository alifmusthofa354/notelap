"use client";

import { Card } from "flowbite-react";
import { useState, useEffect } from "react";

// Definisikan tipe data untuk Quote
type Quote = {
  id: number;
  title: string;
  content: string;
};

export default function QouteId() {
  // Definisikan state untuk quotes, loading, error, dan indeks quote yang aktif
  const [quote, setQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0); // Menyimpan indeks quote yang sedang ditampilkan

  const fetchQuote = async (id: number) => {
    try {
      const response = await fetch(`/api/qoute/${id}`); // Mengambil data berdasarkan ID dari API
      if (!response.ok) {
        throw new Error("Gagal memuat data");
      }
      const data: Quote = await response.json(); // Mengubah data JSON yang diterima
      setQuote(data); // Menyimpan data ke dalam state
    } catch (err) {
      setError(err instanceof Error ? err.message : "Terjadi kesalahan");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Mengambil quote pertama berdasarkan ID
    fetchQuote(currentIndex + 1); // Mengambil data quote dengan ID sesuai currentIndex
  }, [currentIndex]); // Memanggil ulang fetch setiap kali currentIndex berubah

  const nextQuote = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1); // Navigasi ke quote berikutnya
  };

  const prevQuote = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1)); // Navigasi ke quote sebelumnya
  };

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  if (!quote) {
    return <div className="text-center">No Quote Found</div>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4">
      <h1 className="text-3xl font-bold text-center mb-6">Quotes</h1>

      <div className="flex justify-center items-center space-x-4">
        <button
          onClick={prevQuote}
          className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400"
        >
          &lt;
        </button>

        <Card
          href="#"
          className="min-w-full my-4 p-6 border rounded-lg shadow-lg bg-white"
        >
          <div className="w-1/2 mb-2">
            <h5 className="text-lg font-semibold text-gray-900">
              {quote.title}
            </h5>
          </div>

          <div className="w-full mb-4">
            <p className="text-base text-gray-700">{quote.content}</p>
          </div>
        </Card>

        <button
          onClick={nextQuote}
          className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
