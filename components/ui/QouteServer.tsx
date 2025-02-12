import { Card } from "flowbite-react";

// Definisikan tipe data untuk Quote
type Quote = {
  id: number;
  title: string;
  content: string;
};

// Mengambil data di server sebelum render halaman
// dan hanya server localhost yang sudah aktif
// kalau tidak aktif harus dimasukan kedalam page
const fetchQuotes = async (): Promise<Quote[]> => {
  const response = await fetch("http://localhost:3000/api/qoute"); // Gantilah dengan URL API Anda
  if (!response.ok) {
    throw new Error("Gagal memuat data");
  }
  return response.json();
};

export default async function QouteServer() {
  const quotes = await fetchQuotes(); // Mengambil quotes dari API server

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
