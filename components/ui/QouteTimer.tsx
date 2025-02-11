"use client";

import { Card } from "flowbite-react";
import { useState, useEffect } from "react";

// Definisikan tipe data untuk Quote
type Quote = {
  id: number;
  title: string;
  content: string;
};

export default function QouteTimer() {
  // Definisikan state untuk quotes, loading, error, dan indeks quote yang aktif
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0); // Menyimpan indeks quote yang sedang ditampilkan

  useEffect(() => {
    // Cek apakah data sudah ada di localStorage
    const storedQuotes = localStorage.getItem("quotes");

    if (storedQuotes) {
      // Jika ada, gunakan data dari localStorage
      setQuotes(JSON.parse(storedQuotes));
      setLoading(false);
    } else {
      // Jika tidak ada, fetch data dari API
      const fetchData = async () => {
        try {
          const response = await fetch("/api/qoute"); // Mengambil data dari API
          if (!response.ok) {
            throw new Error("Gagal memuat data");
          }
          const data: Quote[] = await response.json(); // Mengubah data JSON yang diterima
          setQuotes(data); // Menyimpan data ke dalam state
          localStorage.setItem("quotes", JSON.stringify(data)); // Simpan ke localStorage
        } catch (err) {
          setError(err instanceof Error ? err.message : "Terjadi kesalahan");
          console.error(err);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }

    // Set timer untuk mengganti quote setiap 5 detik
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000);

    // Bersihkan interval ketika komponen di-unmount
    return () => clearInterval(timer);
  }, [quotes.length]); // Menambahkan quotes.length sebagai dependensi

  const nextQuote = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };

  const prevQuote = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? quotes.length - 1 : prevIndex - 1
    );
  };

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  const currentQuote = quotes[currentIndex];

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
              {currentQuote.title}
            </h5>
          </div>

          <div className="w-full mb-4">
            <p className="text-base text-gray-700">{currentQuote.content}</p>
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
