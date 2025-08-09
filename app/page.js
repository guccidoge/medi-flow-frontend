export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-blue-50">
      <h1 className="text-5xl font-bold text-blue-900">🚑 MediFlow</h1>
      <p className="mt-4 text-lg text-gray-700 text-center max-w-lg">
        Real-time hospital wait time tracking, smart recommendations, and instant guidance.
      </p>
      <a
        href="/map"
        className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        View Hospitals Map
      </a>
    </main>
  );
}
