import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">
        Organiseer je favoriete recepten!
      </h1>
      <Link href="/recipes">
        <div className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600">
          Bekijk je recepten
        </div>
      </Link>
      <Link href="/recipes/add">
        <div className="px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600 mt-4">
          Voeg een recept toe
        </div>
      </Link>
    </div>
  );
}
