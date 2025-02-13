import { Card } from "flowbite-react";
type Note = {
  id: number;
  name: string;
  description: string;
};
export default async function Home() {
  const response = await fetch("https://notelap-opal.vercel.app/api/users");
  const notes: Note[] = await response.json();
  return (
    <>
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-6">Note</h1>

        {notes.map((note) => (
          <Card
            href="#"
            className="min-w-full my-4 p-6 border rounded-lg shadow-lg bg-white"
            key={note.id}
          >
            <div className="w-1/2 mb-4">
              <h5 className="text-base font-semibold text-gray-900">
                {note.name}
              </h5>
            </div>

            <div className="w-full">
              <p className="text-base text-gray-700">{note.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
